import { useState } from "react"
import Contact from "../Components/Contact"
import Faq from "../Components/Faq"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import { faqs } from '../data/faqs'
import Signup from "../Components/Signin"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
       <HeroSection />
       <div style={{minHeight: '60vh'}} className="px-[150px] font-inter">
          <h1 className="text-center font-medium text-techliftBlue text-2xl capitalize my-[50px]">
            Frequently asked questions
          </h1>
          {faqs.map(({ question, answer }) => (
              <Faq question={question} answer={answer} />
            ))}
        </div>
       <Contact />
    </div>
  )
}

export default LandingPage