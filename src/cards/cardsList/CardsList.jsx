import CardsItem from 'cards/cardsItem/CardsItem'
import React from 'react'
export const CardsList = ({ data, delStorageData }) => {
  return (
    <ul>
      {data.map (({id, main, name, sys:{country}}) => {
        return (
        <CardsItem key={id} name={name} main={main} country={country} delStorageData={delStorageData}/>
        )  
      })}
    </ul>
  );
};


// import React from 'react';
// import CardsItem from 'cards/cardsItem/CardsItem';

// const CardsList = ({ data }) => {
//     return (
//         <ul>
//             {data.map(card => (
//                 <CardsItem key={card.id} name={card.name} main={card.main} country={card.country}/>
//             ))}
//         </ul>
//     );
// };

export default CardsList;
