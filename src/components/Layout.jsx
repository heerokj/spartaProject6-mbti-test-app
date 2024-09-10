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
      <header className="border-b-2 border-blue-200/50 ">
        <nav className="flex justify-between items-center p-4 px-8 text-slate-500">
          <div>
            <Link to="/" className="hover:text-blue-600">
              홈
            </Link>
          </div>
          <div>
            {user ? (
              <>
                <Link to="/test" className="mx-4 hover:text-blue-600">
                  테스트
                </Link>
                <Link to="/results" className="mx-4 hover:text-blue-600">
                  테스트결과
                </Link>
                <Link to="/profile" className="mx-4 hover:text-blue-600">
                  프로필
                </Link>
                <button
                  onClick={handleLogout}
                  className="mx-4 hover:text-blue-600"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="mx-4 hover:text-blue-600">
                  로그인
                </Link>
                <Link to="/signup" className="mx-4 hover:text-blue-600">
                  회원가입
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
