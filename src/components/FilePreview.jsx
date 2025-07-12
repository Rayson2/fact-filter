import "../styles/FilePreview.scss";

const FilePreview = ({ previewUrl, type }) => {
  if (!previewUrl) return null;

  const isImage = type?.startsWith("image/");
  const isVideo = type?.startsWith("video/");
  const isAudio = type?.startsWith("audio/");

  return (
    <div className="filePreview">
      <p>✅ File received:</p>

      {isImage && <img src={previewUrl} alt="Preview" />}
      {isVideo && (
        <video controls>
          <source src={previewUrl} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
      {isAudio && (
        <audio controls>
          <source src={previewUrl} type={type} />
          Your browser does not support the audio tag.
        </audio>
      )}

      {!isImage && !isVideo && !isAudio && (
        <p>Preview not supported for this file type.</p>
      )}
    </div>
  );
};

export default FilePreview;
