import React from "react";
import { client } from "../../lib/client";
// import axios from "axios";
import { Product, FooterBanner, HeroBanner } from "../components";

export default function Home({ products, bannerData }) {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      {console.log(products)}
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

// export const getServerSideProps = async () => {
//   try {
//     // Realiza una solicitud para obtener productos
//     const query = '*[_type == "product"]';
//     const productsResponse = await client.axaxios.get(query);
//     const products = productsResponse.data;

//     // Realiza una solicitud para obtener datos de banner
//     const bannerQuery = '*[_type == "banner"]';
//     const bannerResponse = await axios.get(bannerQuery);
//     const bannerData = bannerResponse.data;

//     return {
//       props: { products, bannerData },
//     };
//   } catch (error) {
//     console.error("Error al obtener datos:", error);
//     return {
//       props: { products: [], bannerData: [] }, // Puedes manejar el error como desees
//     };
//   }
// };
