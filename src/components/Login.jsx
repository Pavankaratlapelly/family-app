import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Kusumba" && password === "Kusumba@1435") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  /* ===== Styles ===== */

  const container = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #022c2f 0%, #001b2e 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, Arial",
  };

  const card = {
    width: "420px",
    padding: "40px 30px",
    textAlign: "center",
    color: "#fff",
  };

  const title = {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "40px",
    letterSpacing: "1px",
  };

  const inputWrapper = {
    position: "relative",
    marginBottom: "25px",
  };

  const input = {
    width: "100%",
    padding: "16px 20px 16px 60px",
    borderRadius: "50px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    background: "rgba(255,255,255,0.25)",
    color: "#fff",
  };

  const iconCircle = {
    position: "absolute",
    left: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#022c2f",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const loginBtn = {
    width: "100%",
    padding: "16px",
    borderRadius: "50px",
    border: "none",
    background: "#ffffff",
    color: "#022c2f",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
    transition: "0.3s",
  };

  return (
    <div style={container}>
      <div style={card}>
        <div style={title}>USER LOGIN</div>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={inputWrapper}>
            <div style={iconCircle}>👤</div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={input}
              required
            />
          </div>

          {/* Password */}
          <div style={inputWrapper}>
            <div
              style={{ ...iconCircle, left: "auto", right: "8px", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "🔒"}
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...input, paddingRight: "60px", paddingLeft: "20px" }}
              required
            />
          </div>

          <button
            type="submit"
            style={loginBtn}
            onMouseOver={(e) => (e.target.style.opacity = "0.85")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
