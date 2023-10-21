import React from "react";
import { useParams } from "react-router";
import "./Page.css"

export const Page = ({ perfumes }) => {
  let { id } = useParams();

  // Combine all the perfume arrays into one array
  const allPerfumes = [...perfumes.men, ...perfumes.women, ...perfumes.unisex];

  // Find the perfume with the matching id
  const selectedPerfume = allPerfumes.find((item) => item.id == id);

  if (selectedPerfume) {
    console.log(selectedPerfume.name);
  }

  return (
    <div className="block">
      {selectedPerfume && (
        <div className="product-page">
          <h1>{selectedPerfume.name}</h1>
          <div className="product-info-block">
            <div className="product-img-block">
              <img className="page-img" src={selectedPerfume.img} />
            </div>
            <div className="product-title-block">
              <div className="stock">
                <span className="icon-stock"></span>
                <span>Есть в наличии</span>
              </div>
              <div className="products-info">
                <p>{selectedPerfume.description}</p>
                <br/>
                <p><b>Верхние ноты</b>: <span>{selectedPerfume.top_notes}</span></p>
                <p><b>Ноты сердца</b>: <span>{selectedPerfume.heart_notes}</span></p>
                <p><b>Базовые ноты</b>: <span>{selectedPerfume.base_notes}</span></p>
                <br/>
                <p><b>Аромат</b>: <span>{selectedPerfume.aroma}</span></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
