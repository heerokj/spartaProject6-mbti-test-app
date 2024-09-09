import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div>
      <h1>MBTI 테스트</h1>
      <h3>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</h3>
      <div>
        <div>설명1</div>
        <div>설명2</div>
        <div>설명3</div>
      </div>
      {user ? (
        <Link to="/test">테스트하러가기</Link>
      ) : (
        <Link to="/login">로그인하기</Link>
      )}
    </div>
  );
};

export default Home;
