'use strict';

/**
 * @author Marcos Barrera del Río <elyomarcos@gmail.com>
 */

const inquirer = require( 'inquirer' );

const mainManuChoices = [
  'Izquierda',
  'Derecha',
  'Adelante',
  'Atrás',
];

const mainManuChoicesObject = {
  left: mainManuChoices[0],
  right: mainManuChoices[1],
  forward: mainManuChoices[2],
  backward: mainManuChoices[3],
};

module.exports = {

  mainManuChoices,
  mainManuChoicesObject,

  mainMenu: () => {

    const questions = [
      {
        type: 'list',
        name: 'selected',
        message: 'Selecciona la dirección a la que quieres dirigirte: ',
        choices: mainManuChoices,
      },
    ];
    return inquirer.prompt( questions );

  },
};