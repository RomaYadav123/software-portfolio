import emoji from "react-easy-emoji";
import { HiMiniCodeBracket } from "react-icons/hi2";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <div className=" w-full flex justify-around cursor-pointer ">
      <p className="text-4xl">
        <HiMiniCodeBracket />
      </p>

      <ul className="flex justify-between w-[70%] text-xl">
        <li className="hover:bg-gray-200 p-2">Skills</li>
        <li className="hover:bg-gray-200 p-2">Work Experiences</li>
        <li className="hover:bg-gray-200 p-2">Open Source</li>
        <li className="hover:bg-gray-200 p-2">Achievements</li>
        <li className="hover:bg-gray-200 p-2">Blogs</li>
        <li className="hover:bg-gray-200 p-2">Talks</li>
        <li className="hover:bg-gray-200 p-2">Open Source</li>
        <li className="hover:bg-gray-200 p-2">Contact Me</li>
      </ul>
    </div>
  );
};

export default Header;
