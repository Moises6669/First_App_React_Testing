import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = () => setCounter(counter + 1);

  const handlessOne = () => setCounter(counter - 1);

  const handlreset = () => setCounter(value);
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handlessOne}> -1 </button>
      <button className="button_reset" onClick={handlreset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 1,
};

export default CounterApp;
