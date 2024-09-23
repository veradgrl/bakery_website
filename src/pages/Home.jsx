import React from "react";

const Home = () => {
  return (
    <div className=" bg-[#F3FDE8]">

      <div className="flex flex-row justify-center items-center p-5 pt-32 gap-5">
        <a  href="/breakfast">
          <img className="w-80 rounded-[300px]" src="/images/homeImages/breakfast.png" alt="breakfast" />
        </a>
        <a href="/cakes">
          <img className="w-80 rounded-[300px]"  src="/images/homeImages/cakes.jpg" alt="cakes" />
        </a>
        <a href="/drinks">
          <img className="w-80 rounded-[300px]"  src="/images/homeImages/drinks.jpg" alt="drinks" />
        </a>
      </div>
    </div>
  );
};

export default Home;
