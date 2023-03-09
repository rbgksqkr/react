import AdvertiseList from "@/components/advertise/AdvertiseList/AdvertiseList";
import Content from "@/components/content/Content";
import Header from "@/components/common/header/Header";
import Navbar from "@/components/common/navbar/Navbar";

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
