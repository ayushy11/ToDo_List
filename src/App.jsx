import React, { useState } from 'react';
import ToDoLists from './ToDoLists.jsx';

const App = () => {
    // Hooks to set data
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setInputList(event.target.value)      // set value of the list
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];  // append oldlist & newvalue to the array
        });
        setInputList("");   // clear the list
    };

    const deleteItems = (id) => {
        setItems( (oldItems) => {
            // if matched then filter
            return oldItems.filter( (arrElem, index) => {
                // if not matched return
                return index !== id
            } )        
        } )
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add items"
                        onChange={inputEvent}
                        value={inputList}                        
                    />
                    <button onClick={listOfItems} > + </button>
                    <ol>
                        {items.map((itemval, index) => {
                            return <ToDoLists
                                id={index}
                                key={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;


