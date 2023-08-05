import React from "react";
import Card from "./Card";

const Productos = [
    { id: 1, img: "https://www.pexels.com/es-es/foto/amigos-mujer-sentado-joven-8436470", title: "Esterilla de Yoga Eco-Friendly", description: "Esterilla ecológica y antideslizante para sesiones de yoga cómodas" },
    { id: 2, img: "https://picsum.photos/id/2/300/300", title: "Bloque de Yoga de Corcho Natural", description: "Bloque ligero y resistente para mejorar tu flexibilidad y equilibrio." },
    { id: 3, img: "https://picsum.photos/id/3/300/300", title: "Ropa de Yoga Transpirable", description: "Ropa diseñada para movimientos fluidos y sin restricciones en yoga." },
    { id: 4, img: "https://picsum.photos/id/4/300/300", title: "Cojín de Meditación Ergonómico", description: "Cojín cómodo para meditación con diseño contorneado y soporte ajustable." },
    { id: 5, img: "https://picsum.photos/id/5/300/300", title: "Banda de Resistencia para Estiramientos", description: "Banda versátil para estiramientos y tonificación muscular en yoga." },
    { id: 6, img: "https://picsum.photos/id/6/300/300", title: "Aceites Esenciales para Yoga", description: "Aceites esenciales que crean un ambiente relajante durante la práctica de yoga." },
]

const CardContainer = () => {
    return (
        <div className="row">
        <Card products={Productos} />
        </div>
    )
}

export default CardContainer;