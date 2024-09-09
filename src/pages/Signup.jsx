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

  //formData은 어디서온겨??
  const handleSignUp = async (formData) => {
    signUpMutation.mutate(formData);
  };

  return (
    <>
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignUp} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
