import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
export default function Femme() {
  const [data, setData] = useState([]);
  const categories1 = [
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage9" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage10" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage11" },
    { name: "Voire tout produits", link: "http://127.0.0.1:8000/indeximage12" }
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
  const response = await fetch("http://localhost:8000/api/indexproduct3");
  const result = await response.json();
  setData(result);
} 
  return (
    <div>
         <div className="container cards">
                    <div className="scroll-container">
                        <div className="card-deck row">
        {data.map((item) => (
          <div className="col-sm-3" key={item.id}>
            <div className="card">
              <img src={"http://localhost:8000/" + item.path} alt={item.titre} />

              <div className="card-body">
                <h6 className="card-status text-danger status">{item.titre}</h6>
                <h5 className="card-title">{item.soustitre}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.prix}</p>
               
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
            <a href={category.link}>
              <button>{category.name}</button>
            </a>
            
          </div>
        ))}
      
      </div>
    </div>
    </div>
    </div>
  );
}








