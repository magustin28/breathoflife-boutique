import PropTypes from "prop-types";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import { toUpperCaseFirstLetter, formatCurrencyWithoutDecimal, imgProducts } from "../../assets/utils";
import style from "./ItemDetail.module.css";

const ItemDetail = ({ item, isLoading, stock, isInStock, buttonBack }) => {
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className={`spinner-border ${style.isLoading}`} role="status">
            <span className="visually-hidden text-center"></span>
          </div>
        </div>
      ) : (
        <>
          {!item ? (
            <div className="mt-5 ms-5">
              <p className="fs-3">{`Lo sentimos...:(`}</p>
              <p className="fs-5">El producto solicitado no está disponible en este momento.</p>
              <p className="btn btn-primary" onClick={buttonBack}>
                Volver
              </p>
            </div>
          ) : (
            <div>
              <div className="mt-5 d-flex">
                <p className={style.buttonBack} onClick={buttonBack}>
                  Volver
                </p>
                <span className="mx-2">|</span>
                <p>{toUpperCaseFirstLetter(item.categoryId)}</p>
              </div>
              <div className={` p-3 ${style.item}`}>
                <div className="row py-2 d-flex justify-content-evenly">
                  <div className="col-6 d-flex justify-content-center">
                    <img
                      className={`img-fluid ${style.imageItem} ${item.img.includes("legging") ? `${style.imageItemLegging}` : ""}`}
                      src={imgProducts[item.img]}
                      alt={item.name}
                    />
                  </div>
                  <div className="col-5">
                    <h3 className="text-center fw-normal">{item.name}</h3>
                    <div className="d-flex justify-content-evenly my-4">
                      <p className="mb-0 fs-4 fw-bolder">{formatCurrencyWithoutDecimal(item.price)}</p>
                      <p className="mb-0">
                        Categoria: <span className="my-2 mx-2 badge text-bg-success">{item.categoryId}</span>
                      </p>
                    </div>
                    <p className="my-2">
                      Descripción: <span className={`fst-italic ${style.description}`}>{item.description}</span>{" "}
                    </p>
                    <ItemCountContainer stock={stock} isInStock={isInStock} item={item} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  stock: PropTypes.number.isRequired,
  isInStock: PropTypes.bool.isRequired,
  buttonBack: PropTypes.func,
};

export default ItemDetail;
