import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
export default function ProductsList() {
  const [data, setData] = useState([]);
  const categories1 = [
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage5" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage6" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage7" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage8" },

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
    const response = await fetch("http://localhost:8000/api/indexproduct1");
    const result = await response.json();
    setData(result);
  }
  return (
    <div>
      <div className="container cards">
        <div className="scroll-container">
        <div className="row">
                {data.map((item) => (
                  <div className="col-sm-3" key={item.id}>
                    <Link to={`http://127.0.0.1:8000/indeximage${item.id}`}>
                      <div className="card">
                        <img src={"http://localhost:8000/" + item.path} alt={item.titre} />
                        <div className="card-body bodyCard">
                        <h6 className="card-status text-danger">{item.offers}</h6>
                          <h6 className="card-status titre">{item.titre}</h6>
                          <h5 className="card-title soustitre">{item.soustitre}</h5>
                          <p className="card-text prix">{item.prix} DH</p>
                        </div>
                  </div>
                    </Link>
              </div>
            ))}

        </div>

      </div>
    </div>
    </div >
  );
}






