// list les images apres les image categories


import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
export default function ProductsList() {
  const [data, setData] = useState([]);
  const categories1 = [
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/ProductsList" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage2" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage3" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage4" }
  ];
  useEffect(() => {
    getData();

  }, [])
  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE"
    });
    result = result.json();
    console.warn(result);
    getData();
  }
  async function getData() {
    const response = await fetch("http://localhost:8000/api/index");
    const result = await response.json();
    setData(result);
  }
  return (
    <div>
      <div className="row">
        {data.map((item) => (
          <div className="col-sm-3" key={item.id}>
            <div className="card">
              <img src={"http://localhost:8000/" + item.path} alt={item.titre} />

              <div className="card-body">
                <h6 className="card-status text-danger status">{item.titre}</h6>
                <h5 className="card-title">{item.soustitre}</h5>
                {/* <p className="card-text">{item.prix}</p> */}

                {/* <div className="card-text"><button  class="btn btn-danger" onClick={()=>deleteOperation(item.id)}>delete</button></div> */}
                {/* <a  href={"update/"+item.id}>update</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {categories1.map((category, index) => (
          <div className="col-sm-3 d-flex align-items-center justify-content-center mt-3 d fs-2"  >
            <Link to={category.link}>
              <button>{category.name}</button>
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
}


