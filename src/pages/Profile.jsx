import { updateProfile } from "../api/auth";
import { useState } from "react";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  //닉네임 상태 업데이트
  const handleNicknameChange = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const modifyNickname = async (e) => {
    e.preventDefault();

    const UpdatedUser = {
      ...user,
      nickname: nickname,
    };

    updateProfile(UpdatedUser);
    setUser(UpdatedUser);
  };

  return (
    <div>
      <h1 className="text-2xl m-8 font-bold text-center">프로필 수정</h1>
      <div className="w-1/2 m-auto bg-white p-8 rounded-lg grid">
        <span className="mb-4">닉네임</span>
        <form onSubmit={modifyNickname} className="grid">
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="p-4 bg-blue-200 w-full rounded-lg mt-6 "
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
