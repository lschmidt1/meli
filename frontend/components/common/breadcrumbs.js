import React from "react";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const categories = useSelector(
    (state) => state.productsReducer.searchCategories
  );
  if (categories) {
    return (
      <div id="breadcrumbs" role="breadcrumbs">
        {categories.map((category, idx) => {
          if (idx + 1 === categories.length) {
            return (
              <p key={idx} role="breadText">
                {" "}
                {category}
              </p>
            );
          } else {
            return (
              <div key={idx}>
                <p>{category}&nbsp;&nbsp;</p>
                <p>&gt;</p>
              </div>
            );
          }
        })}
      </div>
    );
  } else return "";
};

export default Breadcrumbs;
