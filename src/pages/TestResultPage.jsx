import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";

const TestResultPage = ({ user }) => {
  const [results, setResults] = useState([]);

  //테스트 결과 불러오기
  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };

  // 내 결과
  const myResult = results.filter((result) => {
    return result.id === user.userId;
  });
  //TODO - 질문하기
  //이런오류가 뜰때도 있고 안 뜰때도 있따.
  //Cannot read properties of undefined (reading 'result')
  console.log(myResult);

  //테스트 결과 업데이트
  const handleUpdate = () => {};

  //테스트 결과 삭제
  const handleDelete = () => {};

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1>테스트 결과</h1>
      {myResult.length > 0 ? (
        <h1>{myResult[0]?.result}</h1>
      ) : (
        <p>결과를 찾을 수 없습니다..</p>
      )}

      <TestResultList
        results={results}
        user={user}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TestResultPage;
