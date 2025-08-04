import { useState } from "react";
import { login } from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError("Login gagal");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-32 p-6 bg-section rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-light">Admin Login</h2>
      {error && <div className="text-red-500">{error}</div>}
      <input className="w-full mb-2 p-2 rounded" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="w-full mb-4 p-2 rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="w-full bg-accent text-primary font-bold py-2 rounded hover:scale-105 transition">Login</button>
    </form>
  );
} 