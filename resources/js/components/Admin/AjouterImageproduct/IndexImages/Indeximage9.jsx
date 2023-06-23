import React, { useState, useEffect } from "react";

export default function Indeximage9() {
  const [data, setData] = useState([]);
  const [donne, setDonne] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:8000/api/indeximage9");
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    const imageUrls = data.map((item) => item.image);
    setDonne(imageUrls);
  }, [data]);


    
  return (
    <div>
      <h1>{donne.length}</h1>
      <img src={donne[1]} alt="" />
    </div>
  );
}
