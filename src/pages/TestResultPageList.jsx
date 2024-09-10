import { useLocation } from "react-router-dom";
import TestResultItem from "../components/TestResultItem";

const TestResultPageList = ({ user }) => {
  const location = useLocation();
  const myResult = location.state?.result;

  return (
    <div className="grid w-2/3 m-auto ">
      <h1 className="text-2xl m-8 font-bold text-center">모든 테스트 결과</h1>
      {myResult
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <TestResultItem key={result.id} result={result} user={user} />
        ))}
    </div>
  );
};

export default TestResultPageList;
