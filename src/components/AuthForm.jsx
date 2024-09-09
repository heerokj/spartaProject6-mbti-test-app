import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const { id, password, nickname } = formData;

  //이해안감
  // 입력 값이 변경될 때마다 formData를 업데이트
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //회원가입 & 로그인
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button type="submit">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

export default AuthForm;
