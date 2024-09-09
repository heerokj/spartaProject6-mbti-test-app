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
      <h1>{myResult[0].result}</h1>
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
