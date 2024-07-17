import React, { useState } from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

const Form = () => {
  const [cityName, setCityName] = useState("");

  return (
    <div className={s.row}>
      <input
        type="text"
        className={s.input}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Link to={cityName} className={s.button}>
        Найти
      </Link>
    </div>
  );
};

export default Form;
