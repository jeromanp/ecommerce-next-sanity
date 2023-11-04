import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

export default function FooterBanner({ footerBanner }) {
  // console.log(footerBanner);
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p><b>Aprovecha el {footerBanner.discount}% de descuento</b></p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>Válido del: {footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.slug.current}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(footerBanner.image)} className="footer-banner-image" />
      </div>
    </div>
  );
}
