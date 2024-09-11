import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/mutations";

const Login = ({ setUser }) => {
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
