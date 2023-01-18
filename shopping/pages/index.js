import AdvertiseList from "../src/components/AdvertiseList";
import Content from "../src/components/Content";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";

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
