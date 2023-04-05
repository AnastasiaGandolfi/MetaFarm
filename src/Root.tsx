import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Test } from "./Test";
import { Components } from "./pages/Components";
import Typography from "./components/Typography";
import {Palette} from "./components/Palette";
import { Button } from "./components/Button";
import { BsCalendarWeekFill } from "react-icons/bs" 
import { CheckboxFormField } from "./components/CheckboxFormField";
import { FormField } from "./components/FormField";
import Nav from 'react-bootstrap/Nav';

const ComponentElements:{element:JSX.Element,title:string}[] = [
  {element:<Typography/>, title:"Typography"},
  {element:<Palette/>, title:"Palette"},
  {element:<Button type="rectangle" text="See all"/>, title:"Button"},
  {element:<Button type="pill-one" text="Today"/>, title:"Button"},
  {element:<Button type="pill-one" text="Last 7 Days"/>, title:"Button"},
  {element:<Button type="pill-one" text="Last 30 Days"/>, title:"Button"},
  {element:<Button type="pill-icon" text={<span><BsCalendarWeekFill/> Upcoming</span>}/>, title:"Button"},
  {element:<CheckboxFormField/>, title:"CheckboxFormField"},
  {element:<FormField/>, title:"FormField"}
]

export function Root() {
  return (
    <BrowserRouter>
       <Nav variant="tabs" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link href="/home">App</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Components</Nav.Link>
      </Nav.Item>
      
    </Nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/components" element={<Components elements={ComponentElements}/>} />
      </Routes>
    </BrowserRouter>
  );
}
