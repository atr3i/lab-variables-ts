import "./style.css";

// *** Módulo 3 - Variables - Laboratorio

// Nombre del grupo / cantante / compositor (string).
// Año de fundación: cuando se formó el grupo (numero).
// Si está en activo (booleano).
// Género musical (string).

// The Beatles / 1960 / Activo: true / 🎵 Pop Rock
// Queen / 1970 / Activo: false / 🎸 Rock
// AC DC / 1973 / Activo: true / 🤘 Hard Rock
// Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
// The Rolling Stones / 1962 / Activo: true / 🎸 Rock

let estiloTitulo = "background-color: darkgreen; color: white; font-weight: bold; font-size: 16px; padding: 2px;";
interface Grupo {
    nombre : string;
    año : number;
    activo : boolean;
    genero : string;
}

const grupoA : Grupo = {
    nombre: "The Beatles",
    año: 1960,
    activo: false,
    genero: "🎵 Pop Rock"
}
const grupoB : Grupo = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock"
}
const grupoC : Grupo = {
    nombre: "AC/DC",
    año: 1973,
    activo: true,
    genero: "🤘 Hard Rock"
}
const grupoD : Grupo = {
    nombre: "Beethoven",
    año: 1770,
    activo: false,
    genero: "🎼 Clásica"
}
const grupoE : Grupo = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock"
}

console.log(
    `%c${grupoA.nombre}`, estiloTitulo,
    `\n - Año de fundación: ${grupoA.año}`,
    `\n - Activo: ${grupoA.activo}`,
    `\n - Género: ${grupoA.genero}`
);

console.log(
    `%c${grupoB.nombre}`, estiloTitulo,
    `\n - Año de fundación: ${grupoB.año}`,
    `\n - Activo: ${grupoB.activo}`,
    `\n - Género: ${grupoB.genero}`
);

console.log(
    `%c${grupoC.nombre}`, estiloTitulo,
    `\n - Año de fundación: ${grupoC.año}`,
    `\n - Activo: ${grupoC.activo}`,
    `\n - Género: ${grupoC.genero}`
);

console.log(
    `%c${grupoD.nombre}`, estiloTitulo,
    `\n - Año de fundación: ${grupoD.año}`,
    `\n - Activo: ${grupoD.activo}`,
    `\n - Género: ${grupoD.genero}`
);

console.log(
    `%c${grupoE.nombre}`, estiloTitulo,
    `\n - Año de fundación: ${grupoE.año}`,
    `\n - Activo: ${grupoE.activo}`,
    `\n - Género: ${grupoE.genero}`
);



