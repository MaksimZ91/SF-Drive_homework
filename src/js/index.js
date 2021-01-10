import "../scss/module20.scss";
import "../scss/module20faq.scss";
import {collaps} from './collaps';

function pageLoaded() {
  collaps();
 }
document.addEventListener("DOMContentLoaded", pageLoaded);