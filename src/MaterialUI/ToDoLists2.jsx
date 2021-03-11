import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom.jsx';

const ToDoLists2 = () => {

    const [item, setItem] = useState("")
    const [newItem, setNewItem] = useState([]);

    const inputEvent = (event) => {
        setItem(event.target.value);
    };
    const listOfItems = () => {
        setNewItem( (prevVal) => {
            return [...prevVal, item]
        });
        setItem(" ");
    };

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> ToDoList </h1>
                    <br />
                    <input 
                      type="text"
                      placeholder="Add item" 
                      onChange={inputEvent}
                      value={item} />
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {newItem.map((val, index) => {
                            return <ListCom key={index} text={val} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};

export default ToDoLists2;