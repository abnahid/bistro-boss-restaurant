import ContactImg from "../../assets/contact/banner.jpg";
import Cover from "./../../components/Cover";
import ContactForm from "./ContactFrom";
import LocationCards from "./LocationCards";
const Contact = () => {
  return (
    <div>
      <Cover img={ContactImg} title="CONTACT US"></Cover>
      <LocationCards />
      <ContactForm />
    </div>
  );
};

export default Contact;
