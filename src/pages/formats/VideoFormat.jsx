import '../../styles/FormatPage.scss';
import FileUpload from '../../components/FileUpload';
import SourceSelector from '../../components/SourceSelector';
import TranscriptDisplay from '../../components/TranscriptDisplay';
import FactCheckResult from '../../components/FactCheckResult';
import UseFactCheck from '../../hook/UseFactCheck';
import LoadingPopup from '../../components/LoadingPopup';
import FilePreview from "../../components/FilePreview";

const VideoFormat = () => {
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

  // Handle the submit button click
  const handleVideoSubmit = () => {
    if (!file || !file.type.startsWith("video/")) {
      alert("Please upload a valid video file.");
      return;
    }
    handleSubmit("fact-check-video"); // ✅ Send correct endpoint
  };

  return (
    <div className="videoPage">
      {isLoading && <LoadingPopup />}

      <h2>Upload a Video for Fact Checking</h2>

{!file && (
  <FileUpload onFileChange={handleFileChange} accept="video/*" />
)}

          <FilePreview previewUrl={previewUrl} type={file?.type} />
          <SourceSelector source={source} onSourceChange={setSource} />

          <button onClick={handleVideoSubmit} className="submitButton">
            Discover What's Really True
          </button>

      <TranscriptDisplay transcript={transcript} />
      <FactCheckResult result={factCheckResult} />
    </div>
  );
};

export default VideoFormat;
