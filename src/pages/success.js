import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../../context/StateContext";
import { runFireworks } from "../../lib/utils";

export default function success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por comprar con nosotros!</h2>
        <p className="email-msg">Te enviamos un email con la orden de compra.</p>
        <p className="description">
          Si tienes alguna duda o sugerencia contactanos en el email:
          <a className="email" href="mailto:soporte@ropishoes.com">
          soporte@ropishoes.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Regresa a la tienda
          </button>
        </Link>
      </div>
    </div>
  );
}
