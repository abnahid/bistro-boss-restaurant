import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../SectionTitle";
const Featured = () => {
  return (
    <div className="bg-featured bg-fixed text-white grayscale-0  my-20">
      <div className="bg-[#151515B3]  pt-8">
        <SectionTitle
          heading="Check it out"
          subHeading="FROM OUR MENU"
        ></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img
              src={featuredImg}
              alt="Featured Dish"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:ml-10">
            <p className="text-yellow-400">Aug 20, 2029</p>
            <h3 className="text-3xl uppercase font-semibold mb-4">
              Where can I get some?
            </h3>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
