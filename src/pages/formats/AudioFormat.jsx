// src/pages/formats/AudioFormat.jsx
import '../../styles/FormatPage.scss';
import FileUpload from '../../components/FileUpload';
import SourceSelector from '../../components/SourceSelector';
import TranscriptDisplay from '../../components/TranscriptDisplay';
import FactCheckResult from '../../components/FactCheckResult';
import UseFactCheck from '../../hook/UseFactCheck';
import LoadingPopup from '../../components/LoadingPopup';
import FilePreview from '../../components/FilePreview';

const AudioFormat = () => {
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

  const handleAudioSubmit = () => {
    if (!file || !file.type.startsWith("audio/")) {
      alert("Please upload a valid audio file.");
      return;
    }
    handleSubmit("fact-check-audio");
  };

  return (
    <div className="audioPage">
      {isLoading && <LoadingPopup />}

      <h2>Upload an Audio File for Fact Checking</h2>

      {!file && (
        <FileUpload onFileChange={handleFileChange} accept="audio/*" />
      )}

      <FilePreview previewUrl={previewUrl} type={file?.type} />
      <SourceSelector source={source} onSourceChange={setSource} />

      <button onClick={handleAudioSubmit} className="submitButton">
        Discover What's Really True
      </button>

      <TranscriptDisplay transcript={transcript} />
      <FactCheckResult result={factCheckResult} />
    </div>
  );
};

export default AudioFormat;
