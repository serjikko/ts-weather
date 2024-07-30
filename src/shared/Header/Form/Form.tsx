import React, { useState } from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { storage } from "../../../model/Storage";

const Form = () => {
  const [cityName, setCityName] = useState("");
  const [searchHistory, setSearchHistory] = useState<String[]>(
    storage.getItem("history") || ["Paris", "London", "Moscow"]
  );
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const handleInputFocus = (e?: React.FocusEvent<HTMLDivElement>) => {
    setHistoryVisible(true);

    if (e) {
      console.log(e);
    }
  };

  const addHistoryElement = () => {
    storage.setItem("history", [cityName, ...searchHistory.slice(0, 3)]);

    setSearchHistory([cityName, ...searchHistory.slice(0, 3)]);
  };

  return (
    <div className={s.row}>
      <div className={s.InputWrapper}>
        <input
          type="text"
          className={s.input}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          value={cityName}
          onFocus={() => handleInputFocus()}
          onBlur={(e) =>
            setTimeout(() => {
              setHistoryVisible(false);
            }, 300)
          }
        />
        {historyVisible === true ? (
          <div className={s.history} onClick={(e) => setHistoryVisible(false)}>
            {searchHistory.map((el, index) => (
              <Link className={s.historyElement} key={index} to={`/${el}`}>
                {el}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <Link
        to={cityName}
        onClick={() => {
          setTimeout(() => {
            setCityName("");
            addHistoryElement();
          }, 300);
        }}
        className={s.button}
      >
        Найти
      </Link>
    </div>
  );
};

export default Form;
