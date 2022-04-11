import React, {createContext, useState} from 'react';

export const CustomContext = createContext();

export default function Context(props) {
    const dishsArr = [
        {
          dishname:'Гречка',
          quantity:'',
          dishId:'1',
          color: '#f6685e',
        }, 
        {
          dishname:'Бургер',
          quantity:'',
          dishId:'2',
          color: '#ed4b82',
        }, 
        {
          dishname:'Пирожок',
          quantity:'',
          dishId:'3',
          color: '#af52bf',
        },
        {
          dishname:'Тирамиссу',
          quantity:'',
          dishId:'4',
          color: '#8561c5',
        }, 
        {
          dishname:'Борщ',
          quantity:'',
          dishId:'5',
          color: '#6573c3',
        }, 
        {
          dishname:'Сало',
          quantity:'',
          dishId:'6',
          color: '#4dabf5',
        }, 
        {
          dishname:'Сельдерей',
          quantity:'',
          dishId:'7',
          color: '#33c9dc',
        }, 
        {
          dishname:'Водка',
          quantity:'',
          dishId:'8',
          color: '#33ab9f',
        }, 
        {
          dishname:'Такос',
          quantity:'',
          dishId:'9',
          color: '#6fbf73',
        }, 
        {
          dishname:'Фалафель',
          quantity:'',
          dishId:'10',
          color: '#a2cf6e',
        }, 
        {
          dishname:'Кола',
          quantity:'',
          dishId:'11',
          color: '#d7e360',
        }, 
        {
          dishname:'Ризотто',
          quantity:'',
          dishId:'12',
          color: '#ffac33',
        }, 
        {
          dishname:'Лобстер',
          quantity:'',
          dishId:'13',
          color: '#ff784e',
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