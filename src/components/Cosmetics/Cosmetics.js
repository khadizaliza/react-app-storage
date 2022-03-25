
import React from 'react';
// import { add } from '../../utilities/calculate';
//import add from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {


    
// const cosmetics = [
//     {id: 1, name: 'Alta', price: 100},
//     {id: 2, name: 'Cream', price: 200},
//     {id: 3, name: 'Nail-Polis', price: 300},
//     {id: 4, name: 'Lipstic', price: 400},
//     {id: 5, name: 'Powder', price: 500},
// ]

//  const first = 55;
//  const second = 66;
//  const total = add(first, second);   
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            {
              cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic ={cosmetic}></Cosmetic>)  
            }
            {/* <p>total: {total}</p> */}
        </div>
    );
};

export default Cosmetics;


















