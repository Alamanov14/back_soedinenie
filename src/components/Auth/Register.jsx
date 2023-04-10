import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContextProvaider";
import Loader from "../Loader/Loader";

const Register = () => {
  const { handleRegister, loading, error, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!email.trim || !password.trim || !passwordConfirm.trim) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      for (let value of formData.values()) {
      }
      handleRegister(formData);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Register</h1>
      {error ? <h2>{error}</h2> : null}
      <form action="submit" onSubmit={handleSave}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          placeholder="password confirm"
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
