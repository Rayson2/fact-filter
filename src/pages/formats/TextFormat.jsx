import '../../styles/TextFormat.scss';
import { useState } from 'react';
import SourceSelector from '../../components/SourceSelector';
import FactCheckResult from '../../components/FactCheckResult';
import LoadingPopup from '../../components/LoadingPopup';
import axios from 'axios';

const TextFormat = () => {
  const apiBase = import.meta.env.VITE_API_BASE_URL;
  const [textInput, setTextInput] = useState('');
  const [source, setSource] = useState('gemini');
  const [factCheckResult, setFactCheckResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!textInput.trim()) {
      alert('Please enter some text.');
      return;
    }

    setIsLoading(true);

try {
const response = await axios.post(
  `${apiBase}/fact-check-text`,
  { text: textInput, source },
  { headers: { "ngrok-skip-browser-warning": "true" } }
)

      const { fact_check } = response.data;
      const result = fact_check?.result;

      const isString = typeof result === 'string';
      const isObject = typeof result === 'object' && result !== null;

      setFactCheckResult(
        isString
          ? {
              status: result,
              description: 'Classified using NLP model.',
              method: fact_check.method,
            }
          : isObject
          ? {
              status: result.status || result.verdict || result.label || 'Unknown',
              description: result.justification || result.description || 'No description available.',
              method: fact_check.method,
            }
          : {
              status: 'Unknown',
              description: 'Unexpected result format.',
              method: fact_check?.method || 'Unknown',
            }
      );
    } catch (error) {
      console.error('❌ Fact-check request failed:', error);

      if (error.response) {
        alert(
          `Server Error: ${error.response.status} - ${
            error.response.data.detail || 'Unknown error'
          }`
        );
      } else if (error.request) {
        alert('No response from server. Please ensure FastAPI is running.');
      } else {
        alert(`Client Error: ${error.message}`);
      }
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="textPage">
      {isLoading && <LoadingPopup />}
      <h2>Paste Text for Fact Checking</h2>
      <textarea
        placeholder="Paste or type your text here..."
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <SourceSelector source={source} onSourceChange={setSource} />
      <button onClick={handleSubmit}>Discover What's Really True</button>

      <FactCheckResult result={factCheckResult} />
    </div>
  );
};

export default TextFormat;
