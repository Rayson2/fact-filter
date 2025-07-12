import '../styles/LoadingPopup.scss';

const LoadingPopup = () => {
  return (
    <div className="loadingOverlay">
      <div className="spinner" />
      <p>Fact-checking in progress...</p>
    </div>
  );
};

export default LoadingPopup;
