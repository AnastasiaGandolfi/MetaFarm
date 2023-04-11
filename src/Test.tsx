import Typography from "./components/Typography";
import { Palette } from "./components/Palette";
import { Button } from "./components/Button";
import { BsCalendarWeekFill } from "react-icons/bs";
import { CheckboxFormField } from "./components/CheckboxFormField";
import { FormField } from "./components/FormField";
export function Test() {
  return (
    <div>
      <Typography />
      <Palette />
      <Button type="rectangle" text="See all" />
      <br />
      <Button type="pill-one" text="Today" />
      <br />
      <Button type="pill-one" text="Last 7 Days" />
      <br />
      <Button type="pill-one" text="Last 30 Days" />
      <br />
      <Button
        type="pill-icon"
        text={
          <span>
            <BsCalendarWeekFill /> Upcoming
          </span>
        }
      />
      <FormField />
    </div>
  );
}
