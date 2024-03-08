import { contextInput } from 'components/App';
import React, { useContext, useState } from 'react';
import s from "./HeroWrapper.module.css";

const HeroWrapper = () => {
    const [inputValue, setInputValue] = useState("");
    const { plusInputValue } = useContext(contextInput);

    const input = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        plusInputValue(inputValue);
        
        // window.localstorage.setItem('inputValue', inputValue)
        // setInputValue("");
    }

    return (
        <>
            <section className={s.heroWrapper}>
                <h1>Weather dashboard</h1>
                <div className={s.plus}>
                        <p>Create your personal list of favorite cities and always be aware of the weather.</p>
                        <p>October 2023Friday, 13th</p>
                </div>
                <form onSubmit={onSubmit}>
                    <input type="text" className={s.input} onChange={input} placeholder='Search location...'/>
                    <button type='submit' className={s.button}></button>
                </form>
            </section>
        </>
    );
}

export default HeroWrapper;






// import React, { useContext, useState, useEffect } from 'react';
// import s from "./HeroWrapper.module.css";
// import {CardsList} from 'cards/cardsList/CardsList';
// import { contextInput } from 'components/App';

// const HeroWrapper = () => {
//     const [inputValue, setInputValue] = useState("");
//     const { plusInputValue } = useContext(contextInput);
//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         const storedCards = localStorage.getItem('cardsList');
//         if (storedCards) {
//             setCards(JSON.parse(storedCards));
//         }
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newCard = { id: Date.now(), name: inputValue }; // Припустимо, що ви маєте зберігати лише ім'я міста
//         const newCards = [...cards, newCard];
//         localStorage.setItem('cardsList', JSON.stringify(newCards));
//         setCards(newCards);
//         setInputValue("");
//     }

//     const input = (e) => {
//         setInputValue(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         plusInputValue(inputValue);
//         setInputValue("");
//     }

//     return (
//         <>
//             <section className={s.heroWrapper}>
//                 <h1>Weather dashboard</h1>
//                 <div className={s.plus}>
//                     <p>Create your personal list of favorite cities and always be aware of the weather.</p>
//                     <p>October 2023Friday, 13th</p>
//                 </div>
//                 <form onSubmit={onSubmit}>
//                     <input type="text" className={s.input} onChange={input} placeholder='Search location...' value={inputValue}/>
//                     <button type='submit' className={s.button}></button>
//                 </form>
//                 <CardsList data={cards} />
//             </section>
//         </>
//     );
// }

// export default HeroWrapper;







// import { contextInput } from 'components/App';
// import React, { useContext, useState, useEffect } from 'react';
// import s from "./HeroWrapper.module.css";
// import { CardsList } from 'cards/cardsList/CardsList';

// const HeroWrapper = () => {
//     const [inputValue, setInputValue] = useState("");
//     const { plusInputValue } = useContext(contextInput);
//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         const storedCards = localStorage.getItem('cardsList');
//         if (storedCards) {
//             setCards(JSON.parse(storedCards));
//         }
//     }, []);

//     const input = (e) => {
//         setInputValue(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         plusInputValue(inputValue);
//         setInputValue("");
//         e.preventDefault();
//         const newCards = [...cards, inputValue];
//         localStorage.setItem('cardsList', JSON.stringify(newCards));
//         setCards(newCards);
//         setInputValue("");
//     }

//     return (
//         <>
//             <section className={s.heroWrapper}>
//                 <h1>Weather dashboard</h1>
//                 <div className={s.plus}>
//                         <p>Create your personal list of favorite cities and always be aware of the weather.</p>
//                         <p>October 2023Friday, 13th</p>
//                 </div>
//                 <form onSubmit={onSubmit}>
//                     <input type="text" className={s.input} onChange={input} placeholder='Search location...'/>
//                     <button type='submit' className={s.button}></button>
//                 </form>
//                 <CardsList cards={cards} />
//             </section>
//         </>
//     );
// }

// export default HeroWrapper;





























// import { contextInput } from 'components/App';
// import React, { useContext, useState, useEffect } from 'react';
// import s from "./HeroWrapper.module.css";

// const HeroWrapper = () => {
//     const [inputValue, setInputValue] = useState("");
//     const { plusInputValue } = useContext(contextInput);
   
//     const input = (e) => {
//         setInputValue(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         plusInputValue(inputValue);
//     }

//     return (
//         <>
//             <section>
//                 <h1>Weather dashboard</h1>
//                 <div className={s.plus}>
//                         <p>Create your personal list of favorite cities and always be aware of the weather.</p>
//                         <p>October 2023Friday, 13th</p>
//                 </div>
//                 <form onSubmit={onSubmit}>
//                     <input type="text" className="input" onChange={input} placeholder='Search location...'/>
//                     <button type='submit' className='button'></button>
//                 </form>
//             </section>
//         </>
//     );
// }

// export default HeroWrapper;
