import React from "react";

const Banner = () => {
  return (
    <div className="w-full">
      <section className="head">
        <div className="container flex items-center justify-evenly">
          <div className="">
            <span className="material-icons mx-1 text-base">call</span>
            <label> +88012 3456 7894</label>
            <span class="material-icons mx-1 text-base">mail</span>
            <label> support@ui-lib.com</label>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="items-center">
              <label>Theme FAQ"s</label>
              <label>Need Help?</label>
            </div>
            <div className="flex justify-evenly pl-48">
              <span class="material-icons">language</span>
              <label>EN</label>
              <span class="material-icons">local_atm</span>
              <label>USD</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
