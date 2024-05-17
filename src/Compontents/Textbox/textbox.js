import React, {useState} from 'react';
import './textbox.css';

export default function TextBox({add, changeAdd, todos, setTodos,disabledIndices,checkedIndices, setDisabledIndices, setCheckedIndices}) {
    const [inputValue, setInput] = useState('');
    const [error, setError] = useState('');

    function addTodo() {
        if ( inputValue.length > 100) {
            setError('Title must be shorter than or equal to 100 characters');
            return;
        }
        if (inputValue.length === 0) {
            setError('Title cannot be empty');
            return;
        }
        const newTodos = [...todos];
        const insertAt = newTodos.length - disabledIndices.length;
        newTodos.splice(insertAt, 0, inputValue);
        setTodos(newTodos);
        setInput('');
        changeAdd();
        setError('');
        setDisabledIndices(disabledIndices.map(index => index + 1));
        setCheckedIndices(checkedIndices.map(index => index + 1));
    }

    function handleInputChange(e) {
        setInput(e.target.value);
        
    }
    
    return (
        <div  className="textbox-style ms-5">
            <div className="d-flex align-items-center justify-content-between">
                <input className="text-style" value={inputValue} onChange={handleInputChange} placeholder="Add new to-do title..."/>
                <div>
                    <button className="clear-style" onClick={changeAdd}>Cancel</button>
                    
                    <button className="add-style" onClick={addTodo}>Submit</button>
                </div>
            </div>
            {error && <p className="error text-sm-start">{error}</p>}
        </div>
    );
}