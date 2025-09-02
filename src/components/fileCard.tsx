import type { FileDescription } from "../data/Types";

type FileCardProps = {
  file: FileDescription;
};

export const FileCard = ({ file }: FileCardProps) => {
  return (
    <div
      className="file"
      style={{
        backgroundColor: file.type === 1 ? "#f2e56b" : "#95d0f5",
      }}
    >
      <h2 className="name">{file.name}</h2>
      <p>type: {file.type + 1}</p>
    </div>
  );
};
