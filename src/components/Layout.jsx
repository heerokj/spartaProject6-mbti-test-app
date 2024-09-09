import { Link, useNavigate } from "react-router-dom";

const Layout = ({ user, setUser }) => {
  const navigate = useNavigate();

  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내주기
  // useEffect(() => {
  // }, []);

  //로그아웃
  const handleLogout = () => {
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
            {user ? (
              <>
                <Link to="/test">테스트</Link>
                <Link to="/results">테스트결과</Link>
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
      {/* //? */}
      <main className="container mx-auto pt-10 main"></main>
    </div>
  );
};

export default Layout;
