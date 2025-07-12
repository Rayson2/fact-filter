import "../styles/About.scss";

const About = () => {
  return (
    <div className="aboutPage">
      <h1>About Fact Filter</h1>

      <p>
        <strong>Fact Filter</strong> is an AI-powered fact-checking tool that
        helps users verify the authenticity of information from videos, audio,
        images, or plain text.
      </p>

      <p>
        Whether you're a journalist, researcher, student, or concerned citizen —
        our tool helps you check whether the content is <em>real</em>,{" "}
        <em>fake</em>, or an <em>opinion</em>.
      </p>

      <h2>🔍 How It Works</h2>
      <ul>
        <li>Upload your media (video, image, audio, or text)</li>
        <li>
          Choose the AI engine: <strong>Gemini</strong> or our{" "}
          <strong>custom NLP model</strong>
        </li>
        <li>We analyze the content and return a verdict with reasoning</li>
      </ul>

      <h2>🧠 Technology We Use</h2>
      <ul>
        <li>
          <strong>OpenAI Whisper</strong> — For accurate speech-to-text
          transcription
        </li>
        <li>
          <strong>Gemini AI</strong> — For advanced fact-checking
        </li>
        <li>
          <strong>Custom NLP Models</strong> — Trained on real news vs fake news
          datasets
        </li>
        <li>
          <strong>FastAPI</strong> — For scalable and fast backend
        </li>
        <li>
          <strong>React</strong> — For a smooth and responsive frontend
        </li>
      </ul>

      <h2>🎯 My Mission</h2>
      <p>
        In a world of misinformation, our goal is to make fact-checking
        accessible, fast, and intelligent. We believe in transparency, truth,
        and empowering users with AI tools that serve society.
      </p>

      <h2>👨‍💻 About the Developer</h2>
      <p> Hi, I'm <strong>Rayson Murray</strong>, a final-year Bachelor of Computer Applications (BCA) student at <strong>Government E. Raghavendra Rao P.G. Science College, Bilaspur (C.G.)</strong>. I’m passionate about leveraging technology to solve real-world problems and create meaningful impact. </p>

      <p>
        I built <strong>Fact Filter</strong> as my final-year project to address
        the growing problem of misinformation in digital content. With interests
        in web development, UI/UX design, and applied machine learning, I wanted
        to create a solution that is not only technically strong but also
        user-friendly and meaningful to society.
      </p>

      <p>
        This project allowed me to apply what I’ve learned in frontend (React,
        SCSS), backend (FastAPI), and machine learning (Whisper, NLP, Gemini AI)
        to develop a real-world fact-checking tool for text, images, videos, and
        audio.
      </p>

      <p>
        I'm excited to continue growing as a full-stack developer and hope to
        contribute to tech-driven solutions that make a difference.
      Feel free to connect with me or reach out for collaboration!</p>

      <h2>📬 Get in Touch</h2>
      <p>
        Have feedback or questions? Reach out at{" "}
        <a href="mailto:raysonmurray19009@gmail.com">
          raysonmurray19009@gmail.com
        </a>
      </p>
    </div>
  );
};

export default About;
