import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../api/auth";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [id, setId] = useState(""); //오류: ()안에 초기값 안넣어줬음
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (userData) => {
    //userData가 꼭있어야 하나??
    try {
      const response = await axios.post(`${API_URL}/login`, {
        id: userData.id,
        password: userData.password,
        nickname: userData.nickname,
      });
      const data = response.data;
      console.log("data", data);

      if (data.success) {
        login(data.accessToken);
        alert("로그인이 완료되었습니다. 홈페이지로 이동합니다.");
        navigate("/");
      }
    } catch (error) {
      console.log("회원가입 에러..", error);
    }
  };

  const mutation = useMutation({
    mutationFn: handleSubmit,
  });
  return (
    <>
      <h1>로그인</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate({
            id,
            password,
          });
        }}
      >
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
        <button type="submit">로그인</button>
      </form>
      <span>계정이 없으신가요?</span> <Link to="/signup">회원가입</Link>
    </>
  );
};

export default Login;
