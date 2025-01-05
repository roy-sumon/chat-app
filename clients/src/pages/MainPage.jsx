import React from "react";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";

const MainPage = () => {
  return (
    <div className="flex sm:gap-4">

      {/* left section */}
      <div className="w-[40%] hidden sm:block lg:w-[30%]">
        <MainLeft />
      </div>

      {/* right section */}
      <div className="w-full sm:w-[60%] lg:[70%]">
        <MainRight />
      </div>
    </div>
  );
};

export default MainPage;
