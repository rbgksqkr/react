import Header from "../src/components/common/header/Header";
import MyPage from "../src/components/common/navbar/MyPage";
import Navbar from "../src/components/common/navbar/Navbar";

const mypage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MyPage />
    </div>
  );
};

export default mypage;
