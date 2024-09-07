import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>MBTI 테스트</h1>
      <h3>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</h3>
      <div>
        <div>설명1</div>
        <div>설명2</div>
        <div>설명3</div>
      </div>
      {isAuthenticated ? (
        <Link to="/testPage">내 성격 알아보러 가기</Link>
      ) : (
        <button
          onClick={() => {
            alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
            navigate("/login");
          }}
        >
          내 성격 알아보러 가기
        </button>
      )}
    </div>
  );
};

export default Home;
