/* import Typography from "./components/Typography";
import {Palette} from "./components/Palette"; */
import { Button } from "./components/Button";
export function Test() {
  return (
    <div>
      {/* <Typography />
      <Palette /> */}
      <Button type="rectangle" text="Visualizza tutto" />
      <br />
      <Button type="pill-one" text="Oggi" />
      <br />
      <Button type="pill-one" text="Ultimi 7 giorni" />
      <br />
      <Button type="pill-one" text="Ultimi 30 giorni" />
    
      
    </div>
  );
}
