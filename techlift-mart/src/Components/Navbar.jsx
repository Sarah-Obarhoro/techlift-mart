import { BsCart3, BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="h-20 bg-techliftWhite px-4 py-3 flex justify-between">
      <div className=" pl-10">
        <h1 className="text-techliftBlue font-redRose text-2xl">Techlift</h1>

        <h1 className="text-techliftBlue font-redRose text-2xl relative left-5">
          Mart
        </h1>
      </div>

      <div className="font-inter text-xl text-techliftBlack py-4">
        <ul className="flex space-x-10 mr-56">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="font-inter text-xl text-techliftBlack py-4">
        <ul className="flex space-x-10">
          <span>|</span>
          <BsPerson className="w-6 h-6" />
          <li>
            <a href="">Register or Sign In</a>
          </li>

          <span>|</span>
          <BsCart3 />
          <li>
            <a href="">Shop Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar