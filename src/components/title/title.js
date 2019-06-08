import React from 'react'; //En todo archivo .js de componente debemos importar la libreria de react
import './title.css';      //Importamos los estilos

//Componente tonto: no tiene logica, solo renderean, son componentes sin estados
//Componente inteligentes: usa logica y estados 

//Por default siempre solo debe haber un EXPORT, lo hace c/componente
//Lo IMPORTA el APP.js


function Title(props) {
 return <div className="ir_Title">Titulo: {props.title}</div> //JScriptSugar
};

export default Title; //Exportamos para lanzarlo a APP.js
