import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Folder,
  FileText,
  Image as ImageIcon,
  FileSpreadsheet,
  File,
  Upload,
  FolderPlus,
  Trash2,
  ExternalLink,
  Search,
  RefreshCw,
  LogOut,
  AlertTriangle,
  HardDrive,
  CheckCircle2,
} from 'lucide-react';
import { User } from 'firebase/auth';
import { googleSignIn, logout, getAccessToken, initAuth } from '../lib/firebaseAuth';
import {
  DriveFile,
  listDriveFiles,
  uploadDriveFile,
  createDriveFolder,
  deleteDriveFile,
} from '../lib/driveApi';

interface GoogleDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleDriveModal: React.FC<GoogleDriveModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Files state
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentFolderId, setCurrentFolderId] = useState<string | undefined>(undefined);
  const [folderHistory, setFolderHistory] = useState<{ id: string | undefined; name: string }[]>([
    { id: undefined, name: 'Meu Drive' },
  ]);

  // Actions state
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Destructive Confirmation Modal state
  const [fileToDelete, setFileToDelete] = useState<DriveFile | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Check auth state on load
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser) => {
        setUser(currentUser);
        setIsAuthenticated(true);
      },
      () => {
        setUser(null);
        setIsAuthenticated(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const loadFiles = useCallback(async (query = searchQuery, folderId = currentFolderId) => {
    setIsLoading(true);
    setFeedbackMessage(null);
    try {
      const result = await listDriveFiles(query, folderId);
      setFiles(result);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Falha ao buscar arquivos do Drive.';
      if (errorMsg.includes('Não autenticado') || errorMsg.includes('401')) {
        setIsAuthenticated(false);
      }
      setFeedbackMessage({ type: 'error', text: errorMsg });
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, currentFolderId]);

  // Load files when authenticated and modal is open
  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadFiles();
    }
  }, [isOpen, isAuthenticated, loadFiles]);

  const handleSignIn = async () => {
    setIsAuthenticating(true);
    setAuthError(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setIsAuthenticated(true);
        loadFiles('', undefined);
      }
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Erro ao autenticar com o Google.';
      setAuthError(errMessage);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setIsAuthenticated(false);
    setFiles([]);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadFiles(searchQuery, currentFolderId);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setFeedbackMessage(null);
    try {
      const uploaded = await uploadDriveFile(file, currentFolderId);
      setFeedbackMessage({ type: 'success', text: `Arquivo "${uploaded.name}" salvo no Google Drive com sucesso!` });
      loadFiles(searchQuery, currentFolderId);
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Erro ao enviar arquivo.';
      setFeedbackMessage({ type: 'error', text: errMessage });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;

    setIsCreatingFolder(true);
    try {
      await createDriveFolder(newFolderName.trim(), currentFolderId);
      setFeedbackMessage({ type: 'success', text: `Pasta "${newFolderName.trim()}" criada!` });
      setNewFolderName('');
      loadFiles(searchQuery, currentFolderId);
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Erro ao criar pasta.';
      setFeedbackMessage({ type: 'error', text: errMessage });
    } finally {
      setIsCreatingFolder(false);
    }
  };

  // Mandatory confirmation for destructive operations
  const confirmDeleteFile = async () => {
    if (!fileToDelete) return;
    setIsDeleting(true);
    try {
      await deleteDriveFile(fileToDelete.id);
      setFeedbackMessage({ type: 'success', text: `"${fileToDelete.name}" foi excluído com sucesso.` });
      setFileToDelete(null);
      loadFiles(searchQuery, currentFolderId);
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Erro ao excluir o arquivo.';
      setFeedbackMessage({ type: 'error', text: errMessage });
    } finally {
      setIsDeleting(false);
    }
  };

  const openFolder = (folder: DriveFile) => {
    setCurrentFolderId(folder.id);
    setFolderHistory((prev) => [...prev, { id: folder.id, name: folder.name }]);
    setSearchQuery('');
    loadFiles('', folder.id);
  };

  const navigateToHistoryIndex = (index: number) => {
    const target = folderHistory[index];
    setFolderHistory((prev) => prev.slice(0, index + 1));
    setCurrentFolderId(target.id);
    setSearchQuery('');
    loadFiles('', target.id);
  };

  const formatFileSize = (bytesStr?: string) => {
    if (!bytesStr) return '';
    const bytes = parseInt(bytesStr, 10);
    if (isNaN(bytes)) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType === 'application/vnd.google-apps.folder') {
      return <Folder className="w-5 h-5 text-amber-400 shrink-0" />;
    }
    if (mimeType.includes('image')) {
      return <ImageIcon className="w-5 h-5 text-emerald-400 shrink-0" />;
    }
    if (mimeType.includes('spreadsheet') || mimeType.includes('excel') || mimeType.includes('csv')) {
      return <FileSpreadsheet className="w-5 h-5 text-green-500 shrink-0" />;
    }
    if (mimeType.includes('document') || mimeType.includes('word') || mimeType.includes('pdf')) {
      return <FileText className="w-5 h-5 text-blue-400 shrink-0" />;
    }
    return <File className="w-5 h-5 text-gray-400 shrink-0" />;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0D1013] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-gray-200"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121518]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.25)]">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-wider uppercase flex items-center gap-2">
                  Google Drive <span className="text-[#22C55E]">CLOUD</span>
                </h3>
                <p className="text-[11px] text-gray-400">
                  Gerencie seus planos alimentares, exames laboratoriais e receitas com permissão de acesso ao Drive.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isAuthenticated && user && (
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || ''} className="w-5 h-5 rounded-full" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-[#22C55E]/30 text-[#22C55E] flex items-center justify-center text-[10px] font-bold">
                      {user.displayName?.[0] || 'U'}
                    </div>
                  )}
                  <span className="max-w-[120px] truncate">{user.displayName || user.email}</span>
                  <button
                    onClick={handleLogout}
                    title="Desconectar"
                    className="text-gray-400 hover:text-red-400 p-1 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* If NOT Authenticated: High conversion Sign in with Google card */}
            {!isAuthenticated ? (
              <div className="py-12 px-4 max-w-md mx-auto text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#22C55E]/20 to-transparent border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <HardDrive className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-2xl uppercase tracking-wider text-white mb-2">
                  Conecte seu Google Drive
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-8">
                  Permita o acesso seguro para sincronizar seus exames de sangue, plano alimentar prescrito, lista de compras e relatórios de acompanhamento nutricional.
                </p>

                {authError && (
                  <div className="w-full mb-6 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs text-left flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{authError}</span>
                  </div>
                )}

                {/* Official Material Style Sign-In Button */}
                <button
                  type="button"
                  onClick={handleSignIn}
                  disabled={isAuthenticating}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-[#1F2937] font-semibold text-sm shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                  <span>{isAuthenticating ? 'Conectando...' : 'Entrar com o Google'}</span>
                </button>

                <p className="text-[10px] text-gray-500 mt-4">
                  Seus dados e arquivos são mantidos em segurança e acessados somente sob sua permissão explícita.
                </p>
              </div>
            ) : (
              /* If Authenticated: Drive Explorer */
              <div className="space-y-4">
                {/* Feedback message */}
                {feedbackMessage && (
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                      feedbackMessage.type === 'success'
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                        : 'bg-red-950/60 border-red-500/40 text-red-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {feedbackMessage.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                      <span>{feedbackMessage.text}</span>
                    </div>
                    <button
                      onClick={() => setFeedbackMessage(null)}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {/* Search Bar */}
                  <form onSubmit={handleSearchSubmit} className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Pesquisar arquivos no Drive..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#121518] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#22C55E] transition-colors"
                    />
                  </form>

                  {/* Actions: Upload & New Folder & Refresh */}
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      id="drive-file-input"
                    />
                    <label
                      htmlFor="drive-file-input"
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#22C55E] hover:bg-[#16a34a] text-[#080A0C] cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all ${
                        isUploading ? 'opacity-50 pointer-events-none' : ''
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{isUploading ? 'Enviando...' : 'Upload'}</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => loadFiles(searchQuery, currentFolderId)}
                      title="Atualizar lista"
                      className="p-2 rounded-xl bg-[#121518] hover:bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors"
                    >
                      <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#22C55E]' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Breadcrumbs Navigation */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 overflow-x-auto py-1 border-b border-white/5">
                  {folderHistory.map((item, index) => (
                    <React.Fragment key={item.id || 'root'}>
                      {index > 0 && <span className="text-gray-600">/</span>}
                      <button
                        onClick={() => navigateToHistoryIndex(index)}
                        className={`hover:text-[#22C55E] transition-colors whitespace-nowrap ${
                          index === folderHistory.length - 1 ? 'font-bold text-white' : ''
                        }`}
                      >
                        {item.name}
                      </button>
                    </React.Fragment>
                  ))}
                </div>

                {/* Create Folder inline form */}
                <form onSubmit={handleCreateFolder} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Nome da nova pasta..."
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    className="flex-1 max-w-xs bg-[#121518] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#22C55E]"
                  />
                  <button
                    type="submit"
                    disabled={isCreatingFolder || !newFolderName.trim()}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#181C21] hover:bg-white/10 border border-white/10 text-gray-200 transition-colors disabled:opacity-40"
                  >
                    <FolderPlus className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>{isCreatingFolder ? 'Criando...' : 'Nova Pasta'}</span>
                  </button>
                </form>

                {/* Files List */}
                <div className="border border-white/10 rounded-xl overflow-hidden bg-[#121518]/60 min-h-[260px]">
                  {isLoading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-gray-400">
                      <RefreshCw className="w-8 h-8 animate-spin text-[#22C55E] mb-3" />
                      <span className="text-xs">Buscando seus arquivos no Google Drive...</span>
                    </div>
                  ) : files.length === 0 ? (
                    <div className="py-20 flex flex-col items-center justify-center text-gray-400 text-center px-4">
                      <HardDrive className="w-10 h-10 text-gray-600 mb-3" />
                      <p className="text-sm font-semibold text-gray-300">Nenhum arquivo encontrado</p>
                      <p className="text-xs text-gray-500 max-w-sm mt-1">
                        Faça upload do seu primeiro exame de sangue, plano alimentar ou crie uma pasta para organizar seus documentos.
                      </p>
                    </div>
                  ) : (
                    <div className="divide-y divide-white/5">
                      {files.map((file) => {
                        const isFolder = file.mimeType === 'application/vnd.google-apps.folder';
                        return (
                          <div
                            key={file.id}
                            className="flex items-center justify-between p-3.5 hover:bg-white/[0.03] transition-colors group"
                          >
                            <div
                              onClick={() => (isFolder ? openFolder(file) : undefined)}
                              className={`flex items-center gap-3 min-w-0 flex-1 ${
                                isFolder ? 'cursor-pointer' : ''
                              }`}
                            >
                              {getFileIcon(file.mimeType)}
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-gray-200 truncate group-hover:text-[#22C55E] transition-colors">
                                  {file.name}
                                </p>
                                <p className="text-[10px] text-gray-500">
                                  {isFolder ? 'Pasta' : formatFileSize(file.size)}
                                  {file.modifiedTime &&
                                    ` • ${new Date(file.modifiedTime).toLocaleDateString('pt-BR')}`}
                                </p>
                              </div>
                            </div>

                            {/* Actions on file */}
                            <div className="flex items-center gap-2 shrink-0 ml-3">
                              {file.webViewLink && (
                                <a
                                  href={file.webViewLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Abrir no Google Drive"
                                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                              {/* Mandatory confirmation trigger for deletion */}
                              <button
                                type="button"
                                onClick={() => setFileToDelete(file)}
                                title="Excluir do Drive"
                                className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 bg-[#121518]/90 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Integração Oficial com Google Workspace Drive
            </span>
            <button
              onClick={onClose}
              className="text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>

        {/* MANDATORY USER CONFIRMATION DIALOG FOR DESTRUCTIVE OPERATIONS */}
        {fileToDelete && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-md bg-[#121518] border border-red-500/40 rounded-2xl p-6 shadow-2xl text-center"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 mx-auto mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Confirmar Exclusão</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Você tem certeza que deseja excluir o item{' '}
                <strong className="text-white font-bold">"{fileToDelete.name}"</strong> do seu Google Drive?
                Esta operação removerá o arquivo permanentemente.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setFileToDelete(null)}
                  disabled={isDeleting}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={confirmDeleteFile}
                  disabled={isDeleting}
                  className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all disabled:opacity-50"
                >
                  {isDeleting ? 'Excluindo...' : 'Sim, Excluir do Drive'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
