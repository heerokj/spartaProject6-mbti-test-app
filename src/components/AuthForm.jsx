import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const { id, password, nickname } = formData;

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
    <div className="bg-slate-50 p-8 m-4 rounded-md">
      <form onSubmit={handleSubmit} className="grid gap-4 ">
        <div>
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleChange}
            placeholder="아이디"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="비밀번호"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
        </div>

        {mode === "signup" && (
          <div>
            <input
              type="text"
              name="nickname"
              value={nickname}
              onChange={handleChange}
              placeholder="닉네임"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
        )}
        <div>
          <button type="submit" className="p-4 bg-blue-200 w-full rounded-lg">
            {mode === "login" ? "로그인" : "회원가입"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
