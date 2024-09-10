import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="text-center ">
      <h1 className="text-4xl m-8 font-bold">MBTI 테스트</h1>
      <h3 className="m-2">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </h3>
      <div
        className="flex justify-center
      "
      >
        <div className="bg-white m-8 w-96 h-52 p-2 rounded-md">
          <h3 className="my-4 font-bold text-xl">성격 유형 검사</h3>
          <h2>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </h2>
        </div>
        <div className="bg-white m-8 w-96 h-52 p-2 rounded-md">
          <h3 className="my-4 font-bold text-xl">성격 유형 이해</h3>
          <h2>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </h2>
        </div>
        <div className="bg-white m-8 w-96 h-52 p-2 rounded-md">
          <h3 className="my-4 font-bold text-xl">팀 평가</h3>
          <h2>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </h2>
        </div>
      </div>
      {user ? (
        <Link
          to="/test"
          className="text-blue-600 hover:text-slate-500 text-xl font-bold "
        >
          테스트하러가기
        </Link>
      ) : (
        <Link
          to="/login"
          className="text-blue-600 hover:text-slate-500 text-xl font-bold"
        >
          로그인하기
        </Link>
      )}
    </div>
  );
};

export default Home;
