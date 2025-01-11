import img3 from "../../assets/menu/pizza-bg.jpg";
import img1 from "../../assets/menu/salad-bg.jpg";
import img2 from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../SectionTitle";
const ChefRecommends = () => {
  const menuItems = [
    {
      image: img1,
      title: "Caesar Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      image: img2,
      title: "Caesar Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      image: img3,
      title: "Caesar Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
  ];

  const MenuItemCard = ({ image, title, description }) => {
    return (
      <div className="card bg-dark07 mx-auto">
        <figure>
          <img src={image} alt={title} className="h-56 w-full object-cover" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="btn btn-outline bg-dark06 border-0 border-b-4 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <MenuItemCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefRecommends;
