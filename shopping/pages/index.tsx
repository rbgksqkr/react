import AdvertiseList from "../src/components/advertise/AdvertiseList/AdvertiseList";
import Content from "../src/components/content/Content";
import Header from "../src/components/common/header/Header";
import Navbar from "../src/components/common/navbar/Navbar";

const Index = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AdvertiseList />
      <Content />
    </div>
  );
};

export default Index;
