const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-10 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
