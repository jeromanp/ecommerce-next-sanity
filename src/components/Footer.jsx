import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>2023 RoPi Shoes All rights reserverd</p>
      <p className="icons">
        <Link
          href={"https://www.instagram.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </Link>
        <Link
          href={"https://www.twitter.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
}
