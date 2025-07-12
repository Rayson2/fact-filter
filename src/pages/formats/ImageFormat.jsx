// src/pages/formats/ImageFormat.jsx
import '../../styles/FormatPage.scss';
import FileUpload from '../../components/FileUpload';
import SourceSelector from '../../components/SourceSelector';
import TranscriptDisplay from '../../components/TranscriptDisplay';
import FactCheckResult from '../../components/FactCheckResult';
import UseFactCheck from '../../hook/UseFactCheck';
import LoadingPopup from '../../components/LoadingPopup';
import FilePreview from '../../components/FilePreview';

const ImageFormat = () => {
  const {
    file,
    source,
    setSource,
    previewUrl,
    transcript,
    factCheckResult,
    isLoading,
    handleFileChange,
    handleSubmit,
  } = UseFactCheck();

  const handleImageSubmit = () => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
    handleSubmit("fact-check-image");
  };

  return (
    <div className="imagePage">
      {isLoading && <LoadingPopup />}

      <h2>Upload an Image for Fact Checking</h2>

      {!file && (
        <FileUpload onFileChange={handleFileChange} accept="image/*" />
      )}

      <FilePreview previewUrl={previewUrl} type={file?.type} />
      <SourceSelector source={source} onSourceChange={setSource} />

      <button onClick={handleImageSubmit} className="submitButton">
        Discover What's Really True
      </button>

      <TranscriptDisplay transcript={transcript} />
      <FactCheckResult result={factCheckResult} />
    </div>
  );
};

export default ImageFormat;
