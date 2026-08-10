import { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pass = "";

    for (let i = 0; i < 8; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  };

  return (
    <div>
      <h2>{password}</h2>
      <button onClick={generatePassword}>Generate</button>
    </div>
  );
}

export default PasswordGenerator;