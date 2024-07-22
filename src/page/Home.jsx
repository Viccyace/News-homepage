import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Side from "../components/side-bar/Side";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Side />
    </div>
  );
};

export default Home;
