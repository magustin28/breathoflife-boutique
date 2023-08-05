import React from "react";

const Card = ({ products }) => {
    return (
        products.map((product) => (
            <div key={product.id} className="card col-4">
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
        ))

    );
};

export default Card;