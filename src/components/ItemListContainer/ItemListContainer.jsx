import style from './ItemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className={style.ItemListContainer}>
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;