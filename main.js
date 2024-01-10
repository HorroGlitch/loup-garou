import './style.css'

document.querySelector('#app').innerHTML = `
<input id="input" type="text">
<button id="add" type="button">Add player</button>
<ul></ul>
`

document.querySelector('main').innerHTML = `
<ul>
  <button id="loupGarou">Loup Garou</button>
  <button id="sorciere">Sorcière</button>
  <button id="voyante">Voyante</button>
  <button id="garde">Garde</button>
  <button id="voleur">Voleur</button>
  <button id="loupBlanc">Loup Blanc</button>
  <button id="loupNoir">Loup noir</button>
  <button id="ange">Ange</button>
  <button id="cupidon">Cupidon</button>
  <button id="chasseur">Chasseur</button>
</ul>
<ul id="allTheRoles"></ul>
`

let input  = document.querySelector("#input");
let btnadd = document.querySelector("#add");
let liste = document.querySelector("ul")
let todos = [];

let loupGarou = document.querySelector("#loupGarou");
let sorciere = document.querySelector("#sorciere");
let voyante = document.querySelector("#voyante");
let garde = document.querySelector("#garde");
let voleur = document.querySelector("#voleur");
let loupBlanc = document.querySelector("#loupBlanc");
let loupNoir = document.querySelector("#loupNoir");
let ange = document.querySelector("#ange");
let cupidon = document.querySelector("#cupidon");
let chasseur = document.querySelector("#chasseur");

let allTheRoles = document.querySelector("#allTheRoles");
let listRoles = [];

loupGarou.addEventListener('click',()=>{
  listRoles.push(loupGarou.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

sorciere.addEventListener('click',()=>{
  listRoles.push(sorciere.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

voyante.addEventListener('click',()=>{
  listRoles.push(voyante.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

garde.addEventListener('click',()=>{
  listRoles.push(garde.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

voleur.addEventListener('click',()=>{
  listRoles.push(voleur.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

loupBlanc.addEventListener('click',()=>{
  listRoles.push(loupBlanc.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

loupNoir.addEventListener('click',()=>{
  listRoles.push(loupNoir.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

ange.addEventListener('click',()=>{
  listRoles.push(ange.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

cupidon.addEventListener('click',()=>{
  listRoles.push(cupidon.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

chasseur.addEventListener('click',()=>{
  listRoles.push(chasseur.textContent);
  allTheRoles.innerHTML = `${listRoles.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});

function notTwice(tmp) {
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i]) {
      const element = array[i];
    }
    
  }
}
notTwice(listRoles)


btnadd.addEventListener('click',()=>{
  todos.push(input.value);
  liste.innerHTML = `${todos.map(item => {
    return `<li>${item}</li>`
  }) .join('')}`
});