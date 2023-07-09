import { useState } from "react"
import AboutUs from "../Components/AboutUs"
import Contact from "../Components/Contact"
import Faq from "../Components/Faq"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import { faqs } from '../data/faqs'
import Signup from "../Components/Signin"

const LandingPage = () => {
  return (
    <div className="overflow-hidden bg-[#F3F3F3]">
      <Navbar />
       <HeroSection />
       <AboutUs />
       <div style={{minHeight: '60vh'}} className="px-[150px] font-inter">
          <h1 className="2xl:mx-[350px] xl:mx-[10px] lg:mx-[10px] sm:mx-[0] mt-[100px] text-center font-semibold text-techliftBlue text-4xl capitalize my-[50px] border-b-2">
            Frequently asked questions
          </h1>
          {faqs.map(({ question, answer }) => (
              // eslint-disable-next-line react/jsx-key
              <Faq question={question} answer={answer} />
            ))}
        </div>
       <Contact />
    </div>
  )
}

export default LandingPage