//FIXME - 인증된 유저의 정보를 가지고있는 context

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //인증을 관리하는 상태
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //인증이 되었는지 판단기준 : localStorage에 accessToken이름의 item이 존재하는가
  //localStorage에 접근해서 토큰이 존재하는지 담기
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={isAuthenticated}>
      {children}
    </AuthContext.Provider>
  );
};
