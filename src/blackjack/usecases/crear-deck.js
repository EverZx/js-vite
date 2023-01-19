import _ from 'underscore';

// Esta función crea un nuevo deck


/**
 * 
 * @param {array<string>} tiposDeCartas Ej: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ej: ['A','J','Q','K']
 * @returns {array<string>} returns a new deck of cards 
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if ( !tiposDeCartas || tiposDeCartas.length === 0 ) 
    throw new Error('TiposDeCarta es olbigatorio como un arreglo de string');

    let deck = [];


    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }


    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

