import propTypes from "prop-types";
import style from './ButtonBack.module.css';

const ButtonBack = ({ botonVolver }) => {

    return (
        <>
            <p className={style.buttonBack} onClick={botonVolver}>Volver</p>
        </>
    );
};

propTypes.propTypes = {
    botonVolver: propTypes.function,
}

export default ButtonBack;