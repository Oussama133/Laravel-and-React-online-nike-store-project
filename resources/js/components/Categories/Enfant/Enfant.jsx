import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
export default function Enfant() {
  const [data, setData] = useState([]);
  const categories1 = [
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage13" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage14" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage15" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage16" }
  ];
  useEffect(() => {
    getData();
      
  }, [])
  async function deleteOperation(id){
let result= await fetch("http://localhost:8000/api/delete/"+id,{
method:"DELETE"});
result=result.json();
console.warn(result);
getData();
}
async function getData(){
  const response = await fetch("http://localhost:8000/api/indexproduct4");
  const result = await response.json();
  setData(result);
} 
  return (
    <div>
      <div className="container cards">
        <div className="scroll-container">
        <h6 className='counting text-danger ml-3'>{categories1.length} produits affiches</h6>
        <div className="row">
                {data.map((item) => (
                  <div className="col-sm-4" key={item.id}>
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




