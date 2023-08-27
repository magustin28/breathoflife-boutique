import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from './ItemList.module.css';


const ItemList = ({ products, isLoading }) => {

    return (
        <div>
            <h2 className={`my-3 text-center ${style.title}`}>Productos</h2>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className={`spinner-border ${style.isLoading}`} role="status">
                        <span className="visually-hidden text-center"></span>
                    </div>
                </div>
            ) : (
                <div className="row d-flex justify-content-center">
                    {products.map((item) => (
                        <div key={item.id} className={`card col-3 m-3 shadow ${style.bgcard}`}>
                            <img src={item.img} className="card-img-top mt-2" alt="..." />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title h-25 pb-3">{item.name}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="my-2 mx-4">${item.price}</p>
                                    <p className="my-2 mx-4 badge text-bg-info">{item.category}</p>
                                </div>
                                <Link to={`/e-commerce-yoga/item/${item.id}`} class="btn btn-primary">Ver detalle</Link>
                            </div>
                        </div>))}
                </div>
            )}
        </div>
    )
};

ItemList.propTypes = {
    products: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default ItemList;