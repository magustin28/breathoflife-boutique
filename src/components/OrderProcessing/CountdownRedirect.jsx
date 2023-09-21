import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountdownRedirect = ({ seconds, to }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
        navigate(to);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count, to]);

  return (
    <div>
      <p className="mb-0 fw-semibold">Redireccionando a la página principal en {count} segundos...</p>
    </div>
  );
};

CountdownRedirect.propTypes = {
  seconds: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
};

export default CountdownRedirect;
