import { deleteTestResult } from "../api/testResults";
import { mbtiDescriptions } from "../data/mbtiDescriptions";

const TestResultItem = ({ result, user }) => {
  //??
  const isOwner = result.id === user.userId;
  const formattedDate = new Date(result.date).toLocaleString();
  const description =
    mbtiDescriptions[result.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  const onDelete = async () => {
    await deleteTestResult(result.id);
  };

  const onUpdate = async () => {};
  return (
    <>
      <div
        key={result.id}
        className="border border-gray-300 rounded-lg w-4/5 m-auto p-4 mb-4"
      >
        <div className="flex justify-between items-center border-b-2 border-gray-300 mb-4 pb-2">
          <h1 className="font-bold text-lg">{result.id}</h1>
          <span className="mr-4 text-slate-400">{formattedDate}</span>
        </div>
        <div>
          <h2 className="text-blue-600 font-bold text-2xl mb-4">
            {result.result}
          </h2>
          <span>{description}</span>
        </div>
        {user.userId === result.id ? (
          <div className="mt-4">
            <button
              onClick={onUpdate}
              className=" bg-blue-200 w-1/4 rounded-lg mx-2 mb-4 h-10"
            >
              수정
            </button>
            <button
              onClick={onDelete}
              className=" bg-blue-200 w-1/4 rounded-lg mx-2 mb-4 h-10"
            >
              삭제
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default TestResultItem;
