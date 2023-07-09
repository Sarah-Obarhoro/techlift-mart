import heroImg from "../assets/hero-img.png";
import { RiTeamFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { MdLibraryBooks } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="bg-[#F3F3F3] h-[100vh] flex z-0">
      <div className="flex-1">
        <div className="relative top-28 left-[70px] text-left max-w-[946px]">
          <p className="text-techliftBlue font-inter text-7xl font-bold">
            Unlocking Tomorrow&#39;s
          </p>
          <p className="text-techliftBlue font-inter text-6xl font-bold mt-4">
            Technology Today
          </p>
          <p className="text-left font-inter text-techliftBlack text-4xl mt-12 font-medium">
            Shop Smarter, Explore Better.
          </p>
          <p className="text-left font-inter text-techliftBlack text-4xl font-medium">
            Get all gadgets in one store.
          </p>
        </div>

        <div className="relative top-32 left-[70px] mt-12 ml-30 p-4 flex justify-start gap-8">
          <div className="flex flex-col items-center justify-center">
            <RiTeamFill
              style={{
                border: "2px solid black",
                borderRadius: "60px",
                padding: "5px",
                width: "40px",
                height: "40px",
              }}
            />
            <span className="text-techliftBlue">1M+ Users</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <TiShoppingCart
              style={{
                border: "2px solid black",
                borderRadius: "60px",
                padding: "5px",
                width: "40px",
                height: "40px",
              }}
            />
            <span className=" text-techliftBlue">10,000 Purchases</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <MdLibraryBooks
              style={{
                border: "2px solid black",
                borderRadius: "60px",
                padding: "5px",
                width: "40px",
                height: "40px",
              }}
            />
            <span className=" text-techliftBlue">8,000 Reviews</span>
          </div>
        </div>
        <div className="relative top-32 left-[70px] mt-4">
          <p className="text-xl mb-2">Coming Soon...</p>
          <div className="flex">
            <div className="w-[217px] h-[70px] rounded-2xl bg-techliftBlack text-techliftWhite text-center">
              <span className="flex justify-center pt-3">
                <AiFillApple
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "5px",
                  }}
                />
                Download on the <br /> App Store
              </span>
            </div>

            <div className="w-[217px] h-[70px] ml-4 rounded-2xl bg-techliftBlack text-techliftWhite text-center">
              <span className="flex justify-center pt-3">
                <BsGooglePlay
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "5px",
                  }}
                />
                Download on the <br /> Google Play Store
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 top-24">
        <img src={heroImg} alt="Hero Image" style={{ height: "",width: "85%" }} className="z-0" />
      </div>
    </div>
  );
};

export default HeroSection;
