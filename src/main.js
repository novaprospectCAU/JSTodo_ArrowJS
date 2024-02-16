import { reactive, html } from "https://esm.sh/@arrow-js/core";
import { App } from "./app.js";

const apps = document.querySelectorAll(".main");

const app1 = new App(apps[0]);
