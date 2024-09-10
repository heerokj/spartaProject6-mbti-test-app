import { useLocation } from "react-router-dom";
import TestResultList from "../components/TestResultList";

const TestResultPageList = ({ user }) => {
  const location = useLocation();
  const myResult = location.state?.result;

  //테스트 결과 업데이트
  const handleUpdate = () => {};

  //테스트 결과 삭제
  const handleDelete = () => {};
  return (
    <div>
      <h1 className="text-2xl m-8 font-bold text-center">모든 테스트 결과</h1>
      <TestResultList
        results={myResult}
        user={user}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TestResultPageList;
