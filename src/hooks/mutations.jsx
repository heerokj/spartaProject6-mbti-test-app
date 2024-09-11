import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const useLogin = (setUser) => {
  const navigate = useNavigate();
  return useMutation({
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
};
