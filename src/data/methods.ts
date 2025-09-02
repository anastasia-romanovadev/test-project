import { folders } from "./folders";
import type { FileDescription, FolderDescription } from "./Types";

export const getFolders = (): Array<Omit<FolderDescription, "files">> => {
	return folders.map(({ id, isHidden, name }) => ({ id, isHidden, name }));
};

export const getFilesInFolder = (folderId: number): Array<FileDescription> | never => {
	const folder = folders.find(({ id }) => id === folderId);

	if (!folder) throw new Error("Folder not found");

	return folder.files;
};
