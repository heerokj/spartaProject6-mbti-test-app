import { Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    //로그아웃

    navigate("/");
  };
  return (
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <div>
            {/* 로그인되어있으면 로그아웃, 로그인안되어있으면 로그인 and 회원가입 */}
            <button onClick={handleLogout}>로그아웃</button>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
