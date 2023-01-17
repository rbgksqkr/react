import AdvertiseList from "../src/components/AdvertiseList";
import CategoryList from "../src/components/CategoryList";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";

const Index = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <CategoryList /> */}
      <AdvertiseList />
    </div>
  );
};

export default Index;
