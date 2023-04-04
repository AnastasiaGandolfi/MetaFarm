
import { ReactComponent as Checkbox } from "../assets/icons/svgexport-14.svg";
import { ReactComponent as Checkedbox } from "../assets/icons/svgexport-15.svg";
import { useState } from "react";
export function CheckboxFormField() {
  const [check, setCheck] = useState(false);
  function handleClick() {
    setCheck((flag) => !flag);
  }
  return (
    <div className="checkbox-container ">
      <div className="checkbox">
        {check === false ? (
          <Checkbox onClick={handleClick} />
        ) : (
          <Checkedbox onClick={handleClick} />
        )}
      </div>
      <div className="typography-container">
        <p className="text-small">
          Digitando la mia mail e iscrivendomi confermo e accetto quanto sopra
        </p>
      </div>
    </div>
  );
}
