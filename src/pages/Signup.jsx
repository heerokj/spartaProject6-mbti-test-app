import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../api/auth";
import axios from "axios";

const Signup = () => {
  const [id, setId] = useState(""); //오류: ()안에 초기값 안넣어줬음
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const register = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        id: userData.id,
        password: userData.password,
        nickname: userData.nickname,
      });
      const data = response.data;

      if (data.success) {
        alert("회원가입이 완료되었습니다. 로그인페이지로 이동합니다.");
        navigate("/login");
      }
    } catch (error) {
      console.log("회원가입 에러..", error);
    }
  };
  const mutation = useMutation({
    mutationFn: register,
  });

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <button
          onClick={() => {
            mutation.mutate({
              id,
              password,
              nickname,
            });
          }}
        >
          회원가입
        </button>
      </div>
      <span>이미 계정이 있으신가요?</span> <Link to="/login">로그인</Link>
    </div>
  );
};

export default Signup;
