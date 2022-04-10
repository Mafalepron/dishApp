import React, {createContext, useState} from 'react';

export const CustomContext = createContext();

export default function Context(props) {
    const dishsArr = [
        {
          dishname:'Гречка',
          quantity:'',
          dishId:'1',
        }, 
        {
          dishname:'Бургер',
          quantity:'',
          dishId:'2',
        }, 
        {
          dishname:'Пирожок',
          quantity:'',
          dishId:'3',
        },
        {
          dishname:'Тирамиссу',
          quantity:'',
          dishId:'4',
        }, 
        {
          dishname:'Борщ',
          quantity:'',
          dishId:'5',
        }, 
        {
          dishname:'Сало',
          quantity:'',
          dishId:'6',
        }, 
        {
          dishname:'Сельдерей',
          quantity:'',
          dishId:'7',
        }, 
        {
          dishname:'Водка',
          quantity:'',
          dishId:'8',
        }, 
        {
          dishname:'Такос',
          quantity:'',
          dishId:'9',
        }, 
        {
          dishname:'Фалафель',
          quantity:'',
          dishId:'10',
        }, 
        {
          dishname:'Кола',
          quantity:'',
          dishId:'11',
        }, 
        {
          dishname:'Ризотто',
          quantity:'',
          dishId:'12',
        }, 
        {
          dishname:'Лобстер',
          quantity:'',
          dishId:'13',
        },  
      ];

      const value = {
          dishsArr,
      }
    return(
        <CustomContext.Provider value={ value }>
            {props.children}
        </CustomContext.Provider>
    )

}