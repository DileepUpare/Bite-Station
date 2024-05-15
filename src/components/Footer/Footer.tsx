import FooterItemContainer from './FooterItemContainer';
import FooterLogo from '@/Assets/images/FooterLogo.png';

const Footer = () => {
  return (
    <footer className="text-white bg-black relative">
      <FooterItemContainer />
      <div className="font-goliMedium grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© Bite Station 2024. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span>Cookie Policy</span>

      </div>
      <div className='mt-[8vw]'>
      <span >
        <img src={FooterLogo}  />
      </span>
      </div>
      
    </footer>
  );
};

export default Footer;
