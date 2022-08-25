import React from "react";
import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  const [errorConfirmPassWord, setErrorConfirmPassWord] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmpasswordColor, setConfirmpasswordColor] = useState("");

  const validateform = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName(" ** กรุณากรอกชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร");
      setUserNameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail(" ** รูปแบบ Email ไม่ถูกต้อง");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassWord("");
      setPasswordColor("green");
    } else {
      setErrorPassWord(" ** รหัสผ่านต้องมีจำนวน 8 ตัวอักษร");
      setPasswordColor("red");
    }

    if (confirmpassword != "" && confirmpassword === password) {
      setErrorConfirmPassWord("");
      setConfirmpasswordColor("green");
    } else {
      setErrorConfirmPassWord(" ** รหัสผ่านไม่ตรงกัน");
      setConfirmpasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateform}>
        <h2>Form Validation</h2>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassWord}</small>
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            style={{ borderColor: confirmpasswordColor }}
          />
          <small style={{ color: confirmpasswordColor }}>
            {errorConfirmPassWord}
          </small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormComponent;
