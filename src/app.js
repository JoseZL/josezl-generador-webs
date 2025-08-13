import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let pronoun = ['el', 'nuestro'];
let adj = ['buen', 'gran'];
let noun = ['mono', 'mapache'];
let extensions = ['.com', '.net', '.us', '.io'];

let lista = document.getElementById('lista');

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extensions) {
        let dominio = p + a + n + e;
        let li = document.createElement('li');
        li.textContent = dominio;
        lista.appendChild(li);
      }
    }
  }
}

};
