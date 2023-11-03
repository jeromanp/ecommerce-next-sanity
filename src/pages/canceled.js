import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TiCancel } from "react-icons/ti";

export default function canceled() {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <TiCancel />
        </p>
        <h2>Se cancelo la compra!</h2>
        <p className="email-msg">
          Ocurrio un error durante el pago con Stripe o tú cancelaste la compra.
        </p>
        <p className="description">
          Realiza el pago cuando estes listo
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
