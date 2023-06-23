// list les images de category

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ImageProductList() {
  const [data, setData] = useState([]);
  const categories = ['', "femme", "homme", "enfant", "accessoires"];
  const category = ["Les Femmes", "Les Hommes", "Les Enfants", "Les Accessories"];

  const categories1 = [
    { name: "les femmes", link: "http://127.0.0.1:8000/femme" },
    { name: "les hommes", link: "http://127.0.0.1:8000/homme" },
    { name: "les enfants", link: "http://127.0.0.1:8000/enfant" },
    { name: "les accessoires", link: "http://127.0.0.1:8000/accessoires" }
  ];
  useEffect(() => {
    getData();

  }, [])
  async function getData() {
    const response = await fetch("http://localhost:8000/api/indeximages");
    const result = await response.json();
    setData(result);
  }
  return (
    <div>
      <div className="row">
        {category.map((category) => (
          <div className="col-sm-3 d-flex align-items-center justify-content-center mt-3 d fs-2"  >
            <div className="card">
              <div key={category}>{category}
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className="row">
        {data.map((item) => (
          <div className="col-sm-3 mt-3 " key={item.id}>
            <Link to={categories[item.id]}>
              <div className="card">
                <img src={"http://localhost:8000/" + item.image} alt={item.titre} />
              </div>
            </Link>
          </div>

        ))}
      </div>
    </div>
  );
}