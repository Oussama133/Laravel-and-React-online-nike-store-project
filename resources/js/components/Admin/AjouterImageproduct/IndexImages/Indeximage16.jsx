import React, { useState, useEffect } from "react";

export default function Indeximage16() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
      
  }, [])
async function getData(){
  const response = await fetch("http://localhost:8000/api/indeximage16");
  const result = await response.json();
  setData(result);
} 
  return (
    <div>
      <div className="row">
        {data.map((item) => (
          <div className="col-sm-3" key={item.id}>
            <div className="card">
              <img src={"http://localhost:8000/" + item.image} alt={item.titre} />
              </div>
            </div>
          
        ))}
      </div>
      
    </div>
  );
}