export enum FileType {
	Image,
	Video,
}

export type VideoFileDescription = {
	type: FileType.Video;
	durationSeconds: number;
	codec: "h264" | "h265";
	withAudio: boolean;
};

export type ImageFileDescription = {
	type: FileType.Image;
	height: number;
	width: number;
	quality: number;
	format: "png" | "jpeg";
};

export type FileDescription = {
	id: number;
	name: string;
	isHidden?: true;
} & (VideoFileDescription | ImageFileDescription);

export type FolderDescription = {
	id: number;
	name: string;
	isHidden?: true;
	files: FileDescription[];
};
