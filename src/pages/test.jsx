// import { useMutation } from "@tanstack/react-query";
// // import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { login } from "../api/auth";
// // import { API_URL } from "../api/auth";
// // import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [id, setId] = useState(""); //오류: ()안에 초기값 안넣어줬음
//   const [password, setPassword] = useState("");
//   // const { login } = useContext(AuthContext);
//   // const navigate = useNavigate();

//   // const handleSubmit = async (userData) => {
//   //   //userData가 꼭있어야 하나??
//   //   try {
//   //     const response = await axios.post(`${API_URL}/login`, {
//   //       id: userData.id,
//   //       password: userData.password,
//   //       nickname: userData.nickname,
//   //     });
//   //     const data = response.data;
//   //     console.log("data", data);

//   //     if (data.success) {
//   //       login(data.accessToken);
//   //       alert("로그인이 완료되었습니다. 홈페이지로 이동합니다.");
//   //       navigate("/");
//   //     }
//   //   } catch (error) {
//   //     console.log("회원가입 에러..", error);
//   //   }
//   // };

//   const mutation = useMutation({
//     mutationFn: login,
//   });
//   return (
//     <>
//       <h1>로그인</h1>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           mutation.mutate({
//             id,
//             password,
//           });
//         }}
//       >
//         <input
//           type="text"
//           value={id}
//           onChange={(e) => {
//             setId(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button type="submit">로그인</button>
//       </form>
//       <span>계정이 없으신가요?</span> <Link to="/signup">회원가입</Link>
//     </>
//   );
// };

// export default Login;
// //============================
// import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { register } from "../api/auth";
// // import axios from "axios";

// const Signup = () => {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const [nickname, setNickname] = useState("");
//   // const navigate = useNavigate();

//   // const register = async (userData) => {
//   //   try {
//   //     const response = await axios.post(`${API_URL}/register`, {
//   //       id: userData.id,
//   //       password: userData.password,
//   //       nickname: userData.nickname,
//   //     });
//   //     const data = response.data;

//   //     if (data.success) {
//   //       alert("회원가입이 완료되었습니다. 로그인페이지로 이동합니다.");
//   //       navigate("/login");
//   //     }
//   //   } catch (error) {
//   //     console.log("회원가입 에러..", error);
//   //   }
//   // };
//   const mutation = useMutation({
//     mutationFn: register,
//   });

//   return (
//     <div>
//       <h1>회원가입</h1>
//       <div>
//         <input
//           type="text"
//           value={id}
//           onChange={(e) => {
//             setId(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           value={nickname}
//           onChange={(e) => {
//             setNickname(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             mutation.mutate({
//               id,
//               password,
//               nickname,
//             });
//           }}
//         >
//           회원가입
//         </button>
//       </div>
//       <span>이미 계정이 있으신가요?</span> <Link to="/login">로그인</Link>
//     </div>
//   );
// };

// export default Signup;
