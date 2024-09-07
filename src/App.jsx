// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import Router from "./shared/Router"; //오류 :import 시 내가 만든걸로!!

//오류: 생성하고 주입을 안했었음
// const queryClient = new QueryClient(); //오류 : useQuer ~~ 이걸로 사용했음..
const App = () => {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
        <Router />
      </AuthProvider>
      {/* </QueryClientProvider> */}
    </>
  );
};

export default App;
