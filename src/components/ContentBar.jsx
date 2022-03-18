import React, {useState} from 'react';
import {Content1} from './Content1';
import EnteredForm from './Elems/EnteredForm';


function ContentBar() {
    const [dishes, setDishes] = useState([]);


    const addDishes = (dish) => {
        setDishes([...dishes, dish]);
        console.log(dishes)
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
            console.log(dishes)
    };


    return(
        <div 
            className='Navbar'
        >
            <ul 
                className="nav nav-pills nav-fill mb-3" 
                id="ex1" 
                role="tablist"
            >
                <li 
                    className="nav-item" 
                    role="presentation"
                >
                        <a
                            className="nav-link active"
                            id="ex2-tab-1"
                            data-mdb-toggle="pill"
                            href="#ex2-pills-1"
                            role="tab"
                            aria-controls="ex2-pills-1"
                            aria-selected="true"
                        >
                                                        Приход 
                        </a>
                </li>
                <li 
                    className="nav-item" 
                    role="presentation"
                >
                        <a
                            className="nav-link"
                            id="ex2-tab-2"
                            data-mdb-toggle="pill"
                            href="#ex2-pills-2"
                            role="tab"
                            aria-controls="ex2-pills-2"
                            aria-selected="false"
                        >
                                                            Возврат
                        </a>
                </li>
            </ul>
            <EnteredForm />
            <div 
                className="tab-content" 
                id="ex2-content" 
            >
                <div
                    className="tab-pane fade show active"
                    id="ex2-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1" 
                >
                        <Content1 
                            addDishes={addDishes}
                            changeQuantity={changeQuantity}
                            dishes={dishes} />
                </div>
                <div
                    className="tab-pane fade"
                    id="ex2-pills-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                >
                                                    Tab 2 content
                </div>
            </div>
        </div>
    )

};


export {ContentBar};