import React, {useState} from 'react';


import { Coming } from './Coming/Coming';
import { Refund } from './Refund/Refund';
import EnteredForm from './EnteredForm';


function ContentBar() {
    const [content, setContent] = useState('coming');


    return(
        <div 
            className='Navbar'>
            <ul 
                className="nav nav-pills nav-fill mb-3" 
                id="ex1" 
                role="tablist">
                <li
                    className="nav-item" 
                    role="presentation">
                        <a
                            className="nav-link active"
                            id="ex2-tab-1"
                            data-mdb-toggle="pill"
                            href="#ex2-pills-1"
                            role="tab"
                            aria-controls="ex2-pills-1"
                            aria-selected="true"
                            style={{border: "1px solid #AFAFAF"}}
                            onClick={() => {setContent('coming')}}>
                                                                    Приход 
                        </a>
                </li>
                <li 
                    className="nav-item" 
                    role="presentation">
                        <a
                            className="nav-link"
                            id="ex2-tab-2"
                            data-mdb-toggle="pill"
                            href="#ex2-pills-2"
                            role="tab"
                            aria-controls="ex2-pills-2"
                            aria-selected="false"
                            style={{border: "1px solid #AFAFAF"}}
                            onClick={() => {setContent('refund')}}>
                                                                    Возврат
                        </a>
                </li>
            </ul>
            <EnteredForm />
            <div 
                className="tab-content" 
                id="ex2-content">
                <div
                    className="tab-pane fade show active"
                    id="ex2-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1">
                        <Coming 
                            content={content}
                            />
                </div>
                <div
                    className="tab-pane fade"
                    id="ex2-pills-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2">
                        <Refund 
                            content={content}
                            />
                </div>
            </div>
        </div>
    )
};


export {ContentBar};