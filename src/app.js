import React from 'react';  //Siempre importar el react
import ReactDOM from 'react-dom';  //es el que me inyecta codigo en el HTML, primero se importa lo de react
import Title from './components/title/title'; //Se importan los comoponentes locales
import './scss/app.scss';


ReactDOM.render(
 <Title title="algo" />, //es donde de cambia por JScript Sugar
 document.getElementById('app')     
);
