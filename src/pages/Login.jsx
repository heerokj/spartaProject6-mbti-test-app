import { useMutation } from "@tanstack/react-query";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
      alert("로그인 되었습니다. 홈으로 이동합니다.");
      navigate("/");
    },
    onError: (error) => {
      return <div>오류입니다.. ${error}</div>;
    },
  });

  const handleLogin = async (formData) => {
    mutation.mutate(formData);
  };
  return (
    <>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
