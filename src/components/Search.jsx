import React from "react";
// import logo from "../../components/assets/images/logo.svg"
// import { Link } from "react-router-dom"
import Link from "next/link";

const Search = ({ CartItem }) => {
  // fixed Header
  //   window.addEventListener("scroll", function () {
  //     const search = document.querySelector(".search")
  //     search.classList.toggle("active", window.scrollY > 100)
  //   })

  return (
    <>
      <section className="search bg-blanco">
        <div className="container flex mx-auto">
          <div className="logo width">
            <img
              src="https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg"
              alt=""
              className="ml-7"
            />
          </div>
          <div className="search-box flex items-center">
            <span className="material-icons px-5 text-negro ">search</span>
            <input
              className="rounded-xl "
              type="text"
              placeholder="Search and hit enter..."
            />
            <span className="text-negro">All Category</span>
          </div>
          <div className="icon flex justify-end width">
            <div className="mx-5 relative">
              <div className="sticky w-11 h-auto">
                <svg
                  fill="#0f3460"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#d1d1d1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="16" cy="16" r="16"></circle>
                  </g>
                </svg>
              </div>
              <span
                className="material-icons text-blanco absolute top-1 left-1.5 text-3xl"
                s
              >
                person
              </span>
            </div>
            <div className="mx-5 relative">
              <div className="sticky w-11 h-auto">
                <svg
                  fill="#0f3460"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#d1d1d1"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="16" cy="16" r="16"></circle>
                  </g>
                </svg>
              </div>
              <span className="material-icons text-blanco absolute top-1 left-1.5 text-3xl">
                shopping_cart
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
