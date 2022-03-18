import React, {createContext, useState} from 'react';


export const CustomContext = createContext();

export const Context = (props) => {
    let [dishes, setDishes] = useState([]);

    const addDishes = (dish) => {
        setDishes([dish, ...dishes]);
    };

    const changeQuantity = (id, inputRemain) => {
        let newDish = {};
        let newDishes = dishes;
        dishes.map((dish, index) => {
                if (dish.id === id) {
                        newDish = {...dish,
                        quantity: inputRemain
                        }
                    newDishes[index] = newDish;
                }
            })
            setDishes(newDishes)
    }


    const value = {
        dishes,
        addDishes,
        changeQuantity,
    } 

    return  <CustomContext.Provider value={value}>
                {props.children}
            </CustomContext.Provider>

}

