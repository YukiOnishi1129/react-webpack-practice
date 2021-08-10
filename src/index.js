import React from "react";
import { render } from "react-dom";
/* data */
import data from "../data/recipes.json";
/* components */
import Menu from "./components/Menu";

render(<Menu recipes={data} />, document.getElementById("root"));
