import React from "react";
import Link from "next/link";
import { getPrice } from "../common/helpers";

function ProductCard(props) {
  const product = props.product;
  const link = product ? `/items/${product.id}` : "";

  if (product) {
    return (
      <div id="productCard" role="productCard">
        <Link href={link}>
          <img
            loading="lazy"
            className="productImage"
            src={product ? product.picture : "Product"}
            alt={product ? product.picture : "Product"}
            title={product ? product.title : "Product"}
          ></img>
        </Link>
        <div role="body">
          <div>
            <div>
              <h1> {getPrice(product)}</h1>
              {product.free_shipping ? (
                <img
                  loading="lazy"
                  src="/ic_shipping@2x.png"
                  title={"Envio gratis"}
                  alt={"Envio gratis"}
                ></img>
              ) : null}
            </div>
            <p>{product.state}</p>
          </div>
          <div>
            <Link href={link}>
              <h2 title={product.title}> {product.title}</h2>
            </Link>
            <p>{product.condition}</p>
          </div>
        </div>
      </div>
    );
  } else return "";
}

export default ProductCard;
