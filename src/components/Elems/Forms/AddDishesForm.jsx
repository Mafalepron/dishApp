import React, { useState} from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MyKeyboard } from '../Keyboard/MyKeyboard'




function AddDishesForm(props) {
    const [dish, setDish] = useState(
        {   id: Date.now(),
            dishname: '',
            quantity: '',
            category: 'first'  }
        );

    const submitDishAdd = (event) => {
        event.preventDefault();
        props.addDishes(dish);
        console.log(dish);
        setDish(
            {   id: Date.now(),
                dishname: '',
                quantity: '',
                category: 'first'    }
        )
    };

    return(
        <div 
          className='InputWithoutCheck'>
            <p style={{fontSize: '14px', textAlign: 'center', color: "#1976D2"}}>Начните поиск подходящего блюда в категории</p>
            <form >
                <div 
                  className="input-group mb-3" 
                  style={{marginTop:"5px"}} >
                  
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
                        value={ dish.dishname }
                        onChange={ event => 
                                        setDish(
                                                    { ...dish,
                                                        dishname:event.target.value }
                                                                                        )
                                                                                            } />
                    <input
                        className="form-control"
                        placeholder="Количество"
                        aria-label="Количество"
                        type ="number"
                        value={dish.quantity}
                        onChange={ event => 
                                        setDish(
                                                    { ...dish,
                                                        quantity:event.target.value } 
                                                                                        )
                                                                                            } />
                </div> 
                <div 
                  style={{display:'flex', justifyContent:"flex-end", marginTop:"10px"}} >
                <MyKeyboard />
                </div>                                                                    
                <div 
                  style={{display:'flex', justifyContent:"flex-end", marginTop:"-8px"}} >
                    <Button 
                        variant="contained" 
                        sx={{height:"32px", fontSize:'13px'}} 
                        type="submit" 
                        onClick={submitDishAdd} >
                                                  Добавить </Button>
                </div>
            </form>
            
        </div>
    )
};


export {AddDishesForm};