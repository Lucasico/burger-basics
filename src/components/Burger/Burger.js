import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    /**
     * Object.keys() retorna um array cujo os  elementos são strings correspondentes para a 
     * propriedade enumerável encontrada diretamento sobre o objeto. 
     * A ordenação das propriedades é a mesma que a dada pelo loop 
     * sobre as propriedades do objeto manualmente.
     * caso não entenda de primeira de controi e vai depurando com console que da certo
      *  O método reduce()executa uma função reducer (fornecida por você) para cada
      *  elemento do array, resultando num único valor de retorno.
     */
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;