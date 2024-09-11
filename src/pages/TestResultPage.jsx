import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import { Link, useNavigate } from "react-router-dom";
import { mbtiDescriptions } from "../data/mbtiDescriptions";

const TestResultPage = ({ user }) => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  //테스트 결과 불러오기
  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };
  // 내 결과
  const myResult = results.filter((result) => {
    return result.id === user.userId;
  });

  const description =
    mbtiDescriptions[myResult[0]?.result] ||
    "MBTI 유형 설명을 찾을 수 없습니다.";

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1 className="text-2xl m-8 font-bold text-center">테스트 결과</h1>
      <div className="w-1/2 m-auto bg-white p-8 rounded-lg grid">
        {myResult.length > 0 ? (
          <>
            <h1 className="text-xl font-bold mb-8">
              당신은 : {myResult[0].result}
            </h1>
            <span>{description}</span>
          </>
        ) : (
          <div className="text-center">
            <p>결과를 찾을 수 없습니다.. 테스트를 진행해주세요.</p>
            <Link to="/test">테스트로 이동하기 👉 테스트</Link>
          </div>
        )}
        <button
          onClick={() => {
            navigate("/resultsList", { state: { result: results } }); //결과 리스트
          }}
          className="p-4 bg-blue-200 w-full rounded-lg mt-6 "
        >
          결과 리스트 페이지로 이동하기
        </button>
      </div>
    </div>
  );
};

export default TestResultPage;
