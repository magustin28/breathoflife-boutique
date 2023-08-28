const products = [
    { id: "1", img: "http://drive.google.com/uc?export=view&id=1LbtViC0hGjD-t_mWeU4W64DlDFE_c5Id", name: "Mat Superior Elementos Lila", description: "La línea superior va a llevar tu práctica al siguiente nivel. Es nuestra línea estrella, ideal para yoguis exigentes. Un producto de alto rendimiento y una calidad inigualables. Mayor superficie, máxima amortiguación de alta densidad y un diseño minimalista que lo vuelve súper elegante.", price: "80.000", category: "mat", stock: 5},
    { id: "2", img: "http://drive.google.com/uc?export=view&id=1LkHMvem7uJz8UwVXpe1vuQNdQdZUmgV0", name: "Mat Superior con Alineación Verde Lima", description: "La línea superior va a llevar tu práctica al siguiente nivel. Es nuestra línea estrella, ideal para yoguis exigentes. Un producto de alto rendimiento y una calidad inigualables. Mayor superficie, máxima amortiguación de alta densidad y un diseño minimalista que lo vuelve súper elegante.", price: "80.000", category: "mat", stock: 0},
    { id: "3", img: "http://drive.google.com/uc?export=view&id=1LlZ3RvJPwBYWWoM_g5TvK1C8Sw4uVC07", name: "Mat Aprendiz Pilates by Oxzen", description: "Mat extra grueso, diseñado específicamente en alianza con OXZEN para la práctica de Pilates Mats. Supercómodo, ligero y hecho de TPE, protegerá tu columna vertebral de superficies duras, mientras te mantenes cómodo durante tu práctica de pilates.", price: "55.000", category: "mat", stock: 7},
    { id: "4", img: "http://drive.google.com/uc?export=view&id=1Lpu2tnctWqxtr6ryIHi-1AVBsG5tfRTu", name: "Mat Aprendiz Corcho", description: "Un yoga mat cómodo, acolchado y liviano, ideal para principiantes y para quienes quieran ir ganando confianza en su práctica diaria. El corcho contiene suberina, una sustancia cerosa y adherente que se libera cuando está mojada. El agarre en realidad aumenta cuanto más sudás, y además es naturalmente antimicrobiano.", price: "55.000", category: "mat", stock: 0},
    { id: "5", img: "http://drive.google.com/uc?export=view&id=1M7c7FPHDvdKGFWZR6iS2KpywP9oXLw9K", name: "Bolso Porta Mat OM Lila", description: "Es súper cómodo gracias a su diseño que además de poder llevar el Mat también tiene  un amplio bolsillo que te permite guardar llaves , celular y hasta una botella pequeña de agua.", price: "20.000", category: "accesorio", stock: 10},
    { id: "6", img: "http://drive.google.com/uc?export=view&id=1M7n6D2B9JsAsNn9fdlsGg0vh8rO2S67-", name: "Bolso Porta Mat OM Golden", description: "Es súper cómodo gracias a su diseño que además de poder llevar el Mat también tiene  un amplio bolsillo que te permite guardar llaves , celular y hasta una botella pequeña de agua.", price: "20.000", category: "accesorio", stock: 9},
    { id: "7", img: "http://drive.google.com/uc?export=view&id=1MBvwyXyKJgfpfhSbiAAgztzUob71vF6p", name: "Taco de Madera", description: "Los tacos son realmente útiles para mantener una correcta alineación corporal, ayudan a adaptar las posturas y hacerlas accesibles.", price: "4.000", category: "accesorio", stock: 0},
    { id: "8", img: "http://drive.google.com/uc?export=view&id=1LrznMK2Om9F807cuuYjP6xn5Re2Mw_s6", name: "Cinto Yoga Estiramiento 2mts", description: "El cinto de yoga te ayuda a ser más flexible, debido a que se ajusta para llevar tus extremidades superiores e inferiores más allá del límite de lo que podrías sin esta correa.", price: "4.600", category: "accesorio", stock: 4},
    { id: "9", img: "http://drive.google.com/uc?export=view&id=1M0pMs1Ja4CWqxddIy0k8M4d9E7j-7Bku", name: "Zafu Vison", description: "Ideal para mantener la curva natural de la columna cuando te sentás a meditar.", price: "35.500", category: "accesorio", stock: 15},
    { id: "10", img: "http://drive.google.com/uc?export=view&id=1MDeGee5T28p2VsC8P0FayEoz3fnOJZBn", name: "Zafu Gris Perla", description: "Ideal para mantener la curva natural de la columna cuando te sentás a meditar.", price: "35.000", category: "accesorio", stock: 0},
    { id: "11", img: "http://drive.google.com/uc?export=view&id=1MJWlHFmMieccl6apiQMx3xJ_XICOHos-", name: "Legging 7/8 Yoga Glow", description: "Legging diseñada específicamente para la práctica de Yoga. Larga al tobillo. Su cintura alta está pensada para que te acompañe en todas las posturas, permaneciendo siempre en su lugar. Confeccionada con costuras planas y suaves por dentro y por fuera para no marcar tu piel.", price: "20.500", category: "ropa", stock: 6},
    { id: "12", img: "http://drive.google.com/uc?export=view&id=1MU7WsiN0F0cgDi8EyoSgHO2R4AXeSO1i", name: "Legging 7/8 Yoga Trip Atenea", description: "Legging diseñada específicamente para la práctica de Yoga. Larga al tobillo. Su cintura alta está pensada para que te acompañe en todas las posturas, permaneciendo siempre en su lugar. Confeccionada con costuras planas y suaves por dentro y por fuera para no marcar tu piel.", price: "20.000", category: "ropa", stock: 3},
];

export const getItem = (id) => {
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

export const getItems = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtroProductos = category ? products.filter((product) => product.category === category) : products;
            resolve(filtroProductos);
        }, 2000);
    });
};