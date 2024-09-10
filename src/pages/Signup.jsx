import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert("회원가입 완료되었습니다. 로그인페이지로 이동합니다.");
      navigate("/login");
    },
    onError: (error) => {
      alert(error, ": 회원가입에 실패했습니다. 다시 시도해주세요");
    },
  });

  //formData??
  const handleSignUp = async (formData) => {
    signUpMutation.mutate(formData);
  };

  return (
    <>
      <div className="bg-white w-96 m-auto text-center mt-10 rounded-md pl-2">
        <h1 className="font-bold text-2xl pt-8">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignUp} />
        <p className="p-4 text-gray-600 bg-white rounded-md">
          이미 계정이 있으신가요?{" "}
          <Link to="/login" className="text-blue-600">
            로그인
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
