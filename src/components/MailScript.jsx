import emailjs from '@emailjs/browser';

const MailScript = (e) => {
  e.preventDefault();

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const serviceID = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    alert("EmailJS environment variables are not properly set.");
    return;
  }

  const params = {
    name,
    email,
    message,
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(serviceID, templateID, params, publicKey)
    .then((res) => {
      console.log("✅ Email sent:", res.text);
      alert("✅ Your message has been sent!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.error("❌ Email send error:", err);
      alert("❌ Failed to send message. Please try again later.");
    });
};

export default MailScript;
