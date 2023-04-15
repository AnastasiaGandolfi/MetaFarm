import { text } from "stream/consumers";
import { useState } from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
export function CheckboxFormField({ text }: { text: string }) {
  const [check, setCheck] = useState(false);
  function handleClick() {
    setCheck((flag) => !flag);
  }
  return (
    <div className="checkbox-container ">
      <div className="checkbox">
        {!check ? (
          <GrCheckbox onClick={handleClick} />
        ) : (
          <GrCheckboxSelected onClick={handleClick} />
        )}
      </div>
      <div className="typography-container">
        <p className="text-small dark">{text}</p>
      </div>
    </div>
  );
}
