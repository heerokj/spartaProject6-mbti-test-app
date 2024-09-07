import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  //로그아웃
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <header>
        <nav>
          <div>
            <Link to="/">홈</Link>
          </div>
          <div>
            {isAuthenticated ? (
              <>
                <Link to="/TestPage">테스트</Link>
                <Link to="/TestResultPage">테스트결과</Link>
                <Link to="/profile">프로필</Link>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
