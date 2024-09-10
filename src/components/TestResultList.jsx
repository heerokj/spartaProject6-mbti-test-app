const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  return (
    <div className="grid gap-8 w-2/3 m-auto">
      {results.length > 0 ? (
        results.map((result) => {
          return (
            <div key={result.id}>
              <div className="flex justify-between mb-4">
                <h1 className="font-bold text-lg">{result.id}</h1>
                <span className="mr-4 text-slate-400">{result.date}</span>
              </div>
              <div>
                <h2 className="text-blue-600 font-bold text-2xl mb-2">
                  {result.result}
                </h2>
                <span>{result?.description}</span>
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
          );
        })
      ) : (
        <p>결과를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default TestResultList;
