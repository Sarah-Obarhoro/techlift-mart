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
        <div className="relative top-56 left-10 text-center">
          <h1 className="text-techliftBlue font-inter text-5xl font-bold">
            Unlocking Tomorrow&#39;s
          </h1>
          <h2 className="text-techliftBlue font-inter text-3xl font-bold">
            Technology Today
          </h2>
          <h3 className="text-center font-gabriela text-techliftBlack text-3xl mt-12">
            Shop Smarter, Explore Better.
          </h3>
          <h4 className="text-center font-gabriela text-techliftBlack text-2xl">
            Get all gadgets in one store.
          </h4>
        </div>

        <div className="relative top-64 left-10 mt-12 ml-30 p-4 flex justify-around">
          <div className="text-center">
            <RiTeamFill
              style={{
                border: "2px solid black",
                borderRadius: "60px",
                padding: "5px",
                width: "40px",
                height: "40px",
              }}
            />
            <span className=" text-techliftBlue">1M+ Users</span>
          </div>

          <div>
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

          <div>
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
        <div className="relative top-64 left-28 mt-4">
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
