import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
  };
  console.log("results===>", results);

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1>테스트 결과</h1>
      <TestResultList />
    </div>
  );
};

export default TestResultPage;
