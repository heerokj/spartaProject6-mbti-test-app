// import { useMutation } from "@tanstack/react-query";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../api/auth";
import { useLogin } from "../hooks/mutations";

const Login = ({ setUser }) => {
  // const navigate = useNavigate();

  // const mutation = useMutation({
  //   mutationFn: login,
  //   onSuccess: (data) => {
  //     setUser(data);
  //     alert("로그인 되었습니다. 홈으로 이동합니다.");
  //     navigate("/");
  //   },
  //   onError: (error) => {
  //     return <div>오류입니다.. ${error}</div>;
  //   },
  // });

  const mutation = useLogin(setUser);

  const handleLogin = async (formData) => {
    mutation.mutate(formData);
  };
  return (
    <>
      <div className="bg-white h-96 w-96 m-auto text-center mt-10 rounded-md">
        <h1 className="font-bold text-2xl pt-8">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <p className="p-4 text-gray-600 bg-white rounded-md">
          계정이 없으신가요?{" "}
          <Link to="/signup" className="text-blue-600">
            회원가입
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
