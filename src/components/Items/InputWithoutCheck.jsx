import React, {useState} from 'react';
import Button from '@mui/material/Button';



function InputWithoutCheck(props) {
    const [dishname, setDishname] = useState('');
    const [quantity, setQuantity] = useState('');

  
    const submitDishAdd = (event) => {
            event.preventDefault();
            // const dish = {dishname, quantity};
            // console.log(dish)
            props.addDishes(dishname, quantity);
      }


    return(
        <div className='InputWithoutCheck'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            Для того, чтобы добавить блюдо заполните поля ниже
            <form >
            <div class="input-group mb-3" style={{marginTop:"5px"}}>
                <span class="input-group-text border-0" id="search-addon"><i class="fas fa-drumstick-bite"></i></span>
                <input 
                    type="text" 
                    class="form-control" 
                    aria-label="Наименование"
                    placeholder="Наименование"
                    value={dishname}
                    onChange={event => setDishname(event.target.value)}
                />
                <input
                    type="text"
                    class="form-control"
                    placeholder="Количество"
                    aria-label="Количество"
                    type="number"
                    value={quantity}
                    onChange={event => setQuantity(event.target.value)}
                />
                <div class="input-group-text">
                    <input 
                        class="form-check-input mt-0" 
                        type="checkbox" 
                        aria-label="Checkbox for following text input" 

                    />
                </div>
            </div> 
            <div style={{display:'flex', justifyContent:"flex-end", marginTop:"-8px"}}>
                <Button variant="contained" sx={{height:"32px"}} type="submit" onClick={submitDishAdd}>Добавить</Button>
            </div>
            </form>
        </div>
    )
};


export {InputWithoutCheck};