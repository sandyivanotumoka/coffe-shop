import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // simulasi validasi
    if (email === "admin@gmail.com" && password === "123") {
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/admin");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-surface border border-primary/20 rounded-2xl p-8 space-y-6 shadow-sm"
      >
        <h1 className="font-display text-3xl text-center">Admin Login</h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-primary/30 rounded-lg px-4 py-3 outline-none focus:border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-primary/30 rounded-lg px-4 py-3 outline-none focus:border-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="w-full py-3 rounded-lg btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
