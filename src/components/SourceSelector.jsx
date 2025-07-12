import "../styles/SourceSelector.scss";


const SourceSelector = ({ source, onSourceChange }) => {
  return (
    <div className="sourceSelector">
      <label htmlFor="source">Select Source:</label>
      <select id="source" value={source} onChange={e => onSourceChange(e.target.value)}>
        <option value="gemini">Gemini (Default)</option>
        <option value="nlp">NLP</option>
      </select>
    </div>
  );
};

export default SourceSelector;
