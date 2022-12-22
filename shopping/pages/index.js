import Link from "next/link";
import AdvertiseList from "../src/components/AdvertiseList";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";

const Index = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AdvertiseList />
    </div>
  );
};

export default Index;
