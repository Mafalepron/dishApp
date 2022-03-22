import React, { useState} from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




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
            <p style={{fontSize: '14px', textAlign: 'center', color: "#1976D2"}}>Для того, чтобы добавить блюдо заполните поля ниже</p>
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
                  style={{display:'flex', justifyContent:"flex-end", marginTop:"-8px"}} >
                    <FormControl sx={{marginLeft: '35px'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{fontSize: '12px'}}>Выберите категорию блюда</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel 
                                        value="first" 
                                        control={<Radio sx={{'& .MuiSvgIcon-root': {
                                            fontSize: 16,}}}/>} 
                                        label="Первое"  
                                        onChange={ event => 
                                            setDish(
                                                        { ...dish,
                                                            category:event.target.value }
                                                                                            )
                                                                                                }/>
                                    <FormControlLabel 
                                        value="second" 
                                        control={<Radio sx={{'& .MuiSvgIcon-root': {
                                            fontSize: 16,}}}/>} 
                                        label="Второе" 
                                        onChange={ event => 
                                            setDish(
                                                        { ...dish,
                                                            category:event.target.value }
                                                                                            )
                                                                                                }/>
                                    <FormControlLabel 
                                        value="third" 
                                        sx={{marginLeft:'20px'}} 
                                        control={<Radio sx={{'& .MuiSvgIcon-root': {
                                            fontSize: 16,}}}/>} 
                                        label="Десерт" 
                                        onChange={ event => 
                                            setDish(
                                                        { ...dish,
                                                            category:event.target.value }
                                                                                            )
                                                                                                }/>
                                </RadioGroup>
                    </FormControl>
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