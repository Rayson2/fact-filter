import "../styles/TranscriptDisplay.scss";

const TranscriptDisplay = ({ transcript }) => {
  return (
    <div className="transcriptDisplay">
      <h3>Transcription:</h3>
      <p>{transcript || 'No transcript available'}</p>
    </div>
  );
};

export default TranscriptDisplay;
