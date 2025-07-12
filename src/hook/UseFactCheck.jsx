import { useState } from "react";
import axios from "axios";

const UseFactCheck = () => {
  const apiBase = import.meta.env.VITE_API_BASE_URL;
  const [file, setFile] = useState(null);
  const [source, setSource] = useState("gemini");
  const [factCheckResult, setFactCheckResult] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (files) => {
    const uploadedFile = files[0];
    setFile(uploadedFile);
    setPreviewUrl(URL.createObjectURL(uploadedFile));
  };

  const handleSubmit = async (endpoint) => {
    if (!file || !endpoint) {
      alert("Please upload a valid file.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);     // Must match FastAPI's `file`
    formData.append("source", source); // Must match FastAPI's `source`

    try {
const res = await axios.post(
  `${apiBase}/${endpoint}`,
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      "ngrok-skip-browser-warning": "true",
    },
  }
);


      const { transcript, fact_check } = res.data;
      setTranscript(transcript);

      // ✅ Normalize different backend formats (NLP vs Gemini)
      if (typeof fact_check.result === "string") {
        // NLP response
        setFactCheckResult({
          status: fact_check.result,
          description: "This result was predicted by the NLP model.",
          method: fact_check.method,
        });
      } else {
        // Gemini response
        setFactCheckResult({
          ...fact_check.result,
          method: fact_check.method,
        });
      }

    } catch (err) {
      console.error("Upload failed:", err.response || err.message || err);

      alert(
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.message ||
        "Something went wrong. Check the console for details."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    file,
    setFile,
    source,
    setSource,
    previewUrl,
    transcript,
    factCheckResult,
    isLoading,
    handleFileChange,
    handleSubmit,
  };
};

export default UseFactCheck;
