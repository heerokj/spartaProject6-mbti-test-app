// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <h1>MBTI 테스트</h1>
      <h3>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</h3>
      <div>
        <div>설명1</div>
        <div>설명2</div>
        <div>설명3</div>
      </div>
      {/* 로그인유무에 따라 로그인페이지로 이동 or 테스트 페이지로 이동  */}
      <button onClick={() => {}}>내 성격 알아보러 가기</button>
    </div>
  );
};

export default Home;
