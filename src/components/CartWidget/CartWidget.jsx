const CartWignet = ({ productsInCart, funcion}) => {
   return (
      <div>
         <button className="btn btn-outline position-relative" onClick={funcion}>
            <i className="bi bi-cart">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {productsInCart}
               <span class="visually-hidden">Productos en el Carrito</span>
               </span>
         </i>
         </button>
      </div>
   );
}

export default CartWignet;