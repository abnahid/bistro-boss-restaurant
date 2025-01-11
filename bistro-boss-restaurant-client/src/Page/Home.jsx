import Banner from "../components/HomeCategory/Banner";
import BistroBossSection from "../components/HomeCategory/BistroBossSection";
import Category from "../components/HomeCategory/Category";
import ChefRecommends from "../components/HomeCategory/ChefRecommends";
import Featured from "../components/HomeCategory/featured";
import PopularMenu from "../components/HomeCategory/PopularMenu";
import Testimonials from "../components/HomeCategory/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto max-w-6xl">
        <Category />
        <BistroBossSection />
        <PopularMenu />
        <ChefRecommends />
      </div>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
