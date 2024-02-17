import { reactive, html } from "https://esm.sh/@arrow-js/core";
import { app } from "./app.js";

const appElements = document.querySelectorAll(".main");

// const app1 = new App(apps[0]);

app(appElements[0]);
