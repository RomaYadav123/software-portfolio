import Header from "./Header";
import ToggleSwitch from "./ToggleSwitch";
import About from "./About";

const Body = () => {
  return (
    <div className="dark:bg-black dark:text-white  h-screen">
      <div className="  flex justify-around py-8">
        <Header />
        <ToggleSwitch />
      </div>

      <About />
    </div>
  );
};

export default Body;
