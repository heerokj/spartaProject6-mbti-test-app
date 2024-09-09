import { useQuery } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../api/auth";
import { useEffect, useState } from "react";

const Profile = ({ user, setUser }) => {
  console.log("user==>", user);
  //TODO - 질문하기
  // console.log("Token", user.accessToken);
  //Cannot read properties of null (reading 'accessToken')에러...
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
    setUser({
      ...user,
      nickname: nickname,
    });
  };

  //질문,..!!!
  const modifyNickname = (e) => {
    e.preventDefault();
    updateProfile(user);
  };

  useEffect(() => {
    getUserProfile(user);
  }, []);
  return (
    <div>
      <h1>프로필 수정</h1>
      <span>닉네임</span>
      <form onSubmit={modifyNickname}>
        <input type="text" value={nickname} onChange={handleNicknameChange} />
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
