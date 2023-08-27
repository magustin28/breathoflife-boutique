const products = [
    { id: "1", img: "https://picsum.photos/id/1/300/300", name: "Mat de Yoga Eco-Friendly", description: "Mat ecológico y antideslizante para sesiones de yoga cómodas", price: 100, category: "mat" },
    { id: "2", img: "https://picsum.photos/id/2/300/300", name: "Bloque de Yoga de Corcho Natural", description: "Bloque ligero y resistente para mejorar tu flexibilidad y equilibrio.", price: 100, category: "accesorio" },
    { id: "3", img: "https://picsum.photos/id/3/300/300", name: "Ropa de Yoga Transpirable", description: "Ropa diseñada para movimientos fluidos y sin restricciones en yoga.", price: 100, category: "ropa" },
    { id: "4", img: "https://picsum.photos/id/4/300/300", name: "Cojín de Meditación Ergonómico", description: "Cojín cómodo para meditación con diseño contorneado y soporte ajustable.", price: 100, category: "accesorio" },
    { id: "5", img: "https://picsum.photos/id/5/300/300", name: "Banda de Resistencia para Estiramientos", description: "Banda versátil para estiramientos y tonificación muscular en yoga.", price: 100, category: "accesorio" },
    { id: "6", img: "https://picsum.photos/id/6/300/300", name: "Aceites Esenciales para Yoga", description: "Aceites esenciales que crean un ambiente relajante durante la práctica de yoga.", price: 100, category: "accesorio" },
];

export const obtenerProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);
            if (product) {
                resolve(product);
            } else {
                reject("Producto no encontrado");
            }
        }, 2000);
    });
};

export const obtenerProductos = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtroProductos = category ? products.filter((product) => product.category === category) : products;
            resolve(filtroProductos);
        }, 2000);
    });
};