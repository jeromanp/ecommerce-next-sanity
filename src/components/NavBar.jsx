import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="header bg-blanco">
        <div className="container mx-auto flex">
          <div className="flex text-negro">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <span className="material-icons">expand_more</span>
            </h4>
          </div>

          <div className="text-negro flex">
            <div>
              <ul
                className="flex items-center justify-evenly"
                //   className={
                //     MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
                //   }
                //   onClick={() => setMobileMenu(false)}
              >
                {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pages">Pages</Link>
                </li>
                <li>
                  <Link href="/user">User account</Link>
                </li>
                <li>
                  <Link href="/vendor">Vendor account</Link>
                </li>
                <li>
                  <Link href="/track">Track my order</Link>
                </li>
                <li className="row">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <button
              className="toggle"
              //   onClick={() => setMobileMenu(!MobileMenu)}
            >
              {/* {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )} */}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
