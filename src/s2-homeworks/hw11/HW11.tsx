import React, { useState } from "react";
import s from "./HW11.module.css";
import s2 from "../../s1-main/App.module.css";
import { restoreState } from "../hw06/localStorage/localStorage";
import SuperRange from "./common/c7-SuperRange/SuperRange";

function HW11() {
  // for autotests // не менять
  const [value1, setValue1] = useState(restoreState<number>("hw11-value1", 0));
  const [value2, setValue2] = useState(
    restoreState<number>("hw11-value2", 100)
  );

  const change = (event: Event, value: number | number[]) => {
      // если пришёл массив - сохранить значения в оба useState, иначе в первый
      console.log(value2)
    if (Array.isArray(value)) {
      const [v1, v2] = value;
      setValue1(v1);
      setValue2(v2);
    } else {
      setValue1(value);
    }
  };

  return (
    <div id={"hw11"}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={"hw11-value"} className={s.number}>
              {value1}
            </span>

            <SuperRange
              id={"hw11-single-slider"}
              value={value1}
              onChange={change}
              min={0}
              max={100}
            />
          </div>

          <div className={s.wrapper}>
            <span id={"hw11-value-1"} className={s.number}>
              {value1}
            </span>

            <SuperRange
              id={"hw11-double-slider"}
              value={[value1, value2]}
              onChange={change}
              min={0}
              max={100}
              disableSwap
            />

            <span id={"hw11-value-2"} className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;
