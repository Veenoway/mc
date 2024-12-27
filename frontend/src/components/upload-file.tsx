import { cn } from "@/utils/cn";
import { IconUpload, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: true,
    noClick: true,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />

        <div className="relative w-full mx-auto pb-5">
          {/* Grid pour les prévisualisations */}

          {/* Liste des fichiers avec détails */}
          {/* {files.map((file, idx) => (
            <motion.div
              key={"file" + idx}
              layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
              className="relative overflow-hidden z-40 bg-[rgba(255,255,255,0.1)] flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md shadow-sm"
            >
              <div className="flex justify-between w-full items-center gap-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                  className="text-base text-neutral-300 truncate max-w-xs"
                >
                  {file.name}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                  className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm bg-[#836EF9] text-white shadow-input"
                >
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </motion.p>
              </div>

              <div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-400">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                  className="px-1 py-0.5 rounded-md bg-[#836EF9] text-white"
                >
                  {file.type}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                >
                  modifié le {new Date(file.lastModified).toLocaleDateString()}
                </motion.p>
              </div>
            </motion.div>
          ))} */}

          {/* Zone de drop */}
          {
            <motion.div
              layoutId="file-upload"
              variants={secondaryVariant}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={cn(
                "relative group-hover/file:shadow-2xl z-40 bg-[rgba(255,255,255,0.1)] flex items-center justify-center h-20 mt-4 w-full rounded-md",
                "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
              )}
            >
              {isDragActive ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-neutral-300 flex flex-col items-center"
                >
                  Drop here
                  <IconUpload className="h-4 w-4 text-neutral-400" />
                </motion.p>
              ) : (
                <>
                  <IconUpload className="h-4 w-4 text-neutral-300" />
                  <p className="text-neutral-300 text-sm ml-2">
                    {files.length === 0 ? "Drop or click" : "Add more"}
                  </p>
                </>
              )}
            </motion.div>
          }
          {files.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 mt-5">
              {files.map((file, idx) => (
                <motion.div
                  key={`preview-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative group"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${idx}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-md flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(idx);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-white bg-red-500 p-2 rounded-full hover:bg-red-600 transition-all"
                    >
                      <IconX className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
