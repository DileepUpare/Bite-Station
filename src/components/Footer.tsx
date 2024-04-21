import FooterLogo from "../Assets/images/Project Logo.png";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-5 md:py-10"> 
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span>
          <img src={FooterLogo} className="h-10 md:h-12 mr-4" /> 
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms Of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
