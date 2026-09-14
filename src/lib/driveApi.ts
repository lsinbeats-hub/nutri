import { getAccessToken } from './firebaseAuth';

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime?: string;
  webViewLink?: string;
  iconLink?: string;
  thumbnailLink?: string;
  shared?: boolean;
}

export async function listDriveFiles(searchQuery?: string, folderId?: string): Promise<DriveFile[]> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Não autenticado com o Google Drive.');
  }

  let q = "trashed = false";
  if (folderId) {
    q += ` and '${folderId}' in parents`;
  }
  if (searchQuery && searchQuery.trim().length > 0) {
    const escaped = searchQuery.replace(/'/g, "\\'");
    q += ` and name contains '${escaped}'`;
  }

  const params = new URLSearchParams({
    q,
    pageSize: '25',
    fields: 'files(id, name, mimeType, size, modifiedTime, webViewLink, iconLink, thumbnailLink, shared)',
    orderBy: 'folder,modifiedTime desc',
  });

  const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Falha ao carregar arquivos do Drive (${response.status})`);
  }

  const data = await response.json();
  return data.files || [];
}

export async function uploadDriveFile(file: File, folderId?: string): Promise<DriveFile> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Não autenticado com o Google Drive.');
  }

  const metadata: Record<string, unknown> = {
    name: file.name,
    mimeType: file.type || 'application/octet-stream',
  };

  if (folderId) {
    metadata.parents = [folderId];
  }

  const form = new FormData();
  form.append(
    'metadata',
    new Blob([JSON.stringify(metadata)], { type: 'application/json; charset=UTF-8' })
  );
  form.append('file', file);

  const response = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,size,modifiedTime,webViewLink,iconLink,thumbnailLink',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: form,
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Falha ao enviar arquivo para o Google Drive (${response.status})`);
  }

  return await response.json();
}

export async function createDriveFolder(name: string, parentFolderId?: string): Promise<DriveFile> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Não autenticado com o Google Drive.');
  }

  const metadata: Record<string, unknown> = {
    name,
    mimeType: 'application/vnd.google-apps.folder',
  };

  if (parentFolderId) {
    metadata.parents = [parentFolderId];
  }

  const response = await fetch(
    'https://www.googleapis.com/drive/v3/files?fields=id,name,mimeType,size,modifiedTime,webViewLink',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metadata),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Falha ao criar pasta no Google Drive (${response.status})`);
  }

  return await response.json();
}

export async function deleteDriveFile(fileId: string): Promise<void> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Não autenticado com o Google Drive.');
  }

  const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok && response.status !== 204) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Falha ao excluir arquivo do Google Drive (${response.status})`);
  }
}
