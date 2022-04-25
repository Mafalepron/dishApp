import React, { useState, useContext  } from 'react';
import { MyKeyboard } from './Keyboard/MyKeyboard';
import { CustomContext } from '../../../../../Context';
import DishApiItem from './DishApiItems/DishApiItem'




function AddDishesForm(props) {
  const { dishsArr = [] } = useContext(CustomContext);
  const [dishs, setDishs] = useState(dishsArr);
  const [dishName, setDishName] = useState('');

  const [handleInput, setHandleInput] = useState(false)


  const findDishByName = (e) => {
    let findedDishs = [];
    dishsArr.map( (dish) => {
      if ( dish.dishname.toUpperCase().indexOf(dishName.toUpperCase()) > -1 ) {
            findedDishs.push(dish)
     }
    })
    return findedDishs
  }


  const handleSetDishName = (e) => {
    setDishName(e.target.value)
    let newDishs = findDishByName(e)
    setDishs(newDishs)
    console.log(dishName)
  }

  //функция поиска
  

  

  // const [dishId, setDishId] = useState(0)

  // const [dishQuantity, setDishQuantity] = useState(0)

  // const handleSetDishQuantity = (e) => {
  //   //функция поиска
  //   setDishQuantity(e.target.value)
  // }

    return(
      <div >
        <div className='dishApiItems' 
             style={{ 
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      width: '650px',
                      height: '400px',
                      marginBottom: '140px',
                      marginLeft: '30px',
                      textAlign: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      }}>
                                      { dishs.map( (dish) => {
                                        return <DishApiItem dish={dish} key={dish.dishId} />
                                      }) }
        </div>
        <div 
          className='InputWithoutCheck' style={{position: 'relative', top: '-90px'}}>
            <p style={{fontSize: '14px', textAlign: 'center', color: "#1976D2"}}>Начните поиск подходящего блюда в категории</p>
                <div 
                  className="input-group mb-3" 
                  style={{marginTop:"5px", width:"400px", marginLeft: '120px'}} >
                  
                    <span 
                      className="input-group-text border-0" 
                      id="search-addon" >
                                            <i 
                                              className="fas fa-drumstick-bite" >
                                            </i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Наименование"
                        placeholder="Наименование"
                        value={ dishName }
                        onChange={handleSetDishName} />
                </div> 
                <div 
                  style={{marginTop:"10px"}} >
                    <MyKeyboard 
                        setDishName={setDishName}
                        dishName={dishName} 
                        findDishByName={findDishByName} 
                        setDishs={setDishs} />
                </div>                                                                    
        </div>
        </div>
    )
};


export {AddDishesForm};