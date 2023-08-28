import ItemCountContainer from "../ItemCount/ItemCountContainer";
import propTypes from "prop-types";
import style from './ItemDetail.module.css';

const ItemDetail = ({ item, isLoading, stock, isInStock }) => {

    return (
        <div>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className={`spinner-border ${style.isLoading}`} role="status">
                        <span className="visually-hidden text-center"></span>
                    </div>
                </div>
            ) : (
                <>{!item ? (
                    <p>Producto no encontrado</p>
                ) : (
                    <div className={`mt-5 p-3 ${style.item}`}>
                        <div className="row py-2 d-flex justify-content-evenly">
                            <div className="col-6 d-flex justify-content-center">
                                <img className={`img-fluid ${style.imageItem}`} src={item.img} alt={item.name} />
                            </div>
                            <div className="col-5">
                                <h3 className="text-center fw-normal">{item.name}</h3>
                                <div className="d-flex justify-content-evenly my-4">
                                    <p className="mb-0 fs-4 fw-bolder">$ {item.price}</p>
                                    <p className="mb-0">Categoria: <span className="my-2 mx-2 badge text-bg-success">{item.category}</span></p>
                                </div>
                                <p className="my-2">Descripción: <span className={`fst-italic ${style.description}`}>{item.description}</span> </p>
                                <ItemCountContainer stock={stock} isInStock={isInStock} />
                            </div>
                        </div>
                    </div>
                )}</>
            )}
        </div>
    )
};

ItemDetail.propTypes = {
    products: propTypes.object,
    isLoading: propTypes.bool.isRequired,
    stock: propTypes.number.isRequired,
    isInStock: propTypes.bool.isRequired,
};

export default ItemDetail;