import PropTypes from "prop-types";
import style from "./ButtonBack.module.css";

const ButtonBack = ({ buttonBack }) => {
  return (
    <p className={style.buttonBack} onClick={buttonBack}>
      Volver
    </p>
  );
};

ButtonBack.propTypes = {
  buttonBack: PropTypes.func,
};

export default ButtonBack;
