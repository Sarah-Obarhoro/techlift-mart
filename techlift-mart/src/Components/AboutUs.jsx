import aboutImg from "../assets/about-img.png"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const AboutUs = () => {
  return (
    <div className="h-[60vh] bg-techliftWhite flex">
      <div className="h-[60vh] w-1/2 p-8 bg-techliftBlack flex-1">
        <img src={aboutImg} alt="About Us" className="relative top-[-52px]" />
      </div>
      <div className="w-1/2 flex-1  m-auto justify-center p-8">
        <span className="text-lg text-techliftBlack">
          Techlift Mart is a cutting-edge technology that meets your everyday
          needs! We are leading ecommerce platform dedicated to providing you
          with the latest gadgets that enhance your digital lifestyle. With a
          passion for innovation and a commitment to excellence, we strive to
          lift your tech experience to a new height.
        </span>
        <div className="flex mt-5">
          <FaFacebook className="w-6 h-6 text-[#1877F2]" />
          <AiFillTwitterCircle className="w-6 h-6 text-[#00A3FF] ml-1" />
          <TiSocialLinkedinCircular className="w-6 h-6 text-[#1877F2]" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
