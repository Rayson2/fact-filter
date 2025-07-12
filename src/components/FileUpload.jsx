import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image } from 'lucide-react';
import "../styles/FileUpload.scss";

const FileUpload = ({ onFileChange, accept }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileChange(acceptedFiles);
    }
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <div className="fileUpload">
      <label>Upload your File :</label>
      <div {...getRootProps({ className: `dropZone ${isDragActive ? 'active' : ''}` })}>
        <input {...getInputProps()} />
        <Image className="icon" size={40} />
        <p><strong>Drag & Drop</strong></p>
        <span>or <span className="browse">browse</span></span>
      </div>
    </div>
  );
};

export default FileUpload;
