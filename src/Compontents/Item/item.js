import React from "react";
import './item.css';
import { ReactComponent as Delete } from './MinusCircle.svg';
import { ReactComponent as Check } from './CheckCircle.svg';
import { ReactComponent as Green } from './Vector.svg';

export default function Item({index, todo, todos, setTodos}) {
    const [checked, setChecked] = React.useState(false);

    function deleteItem() {
        setTodos(todos.filter((_,todoindex) => todoindex !== index));
    }

    function checkItem() {
        setChecked(!checked);
    }
    return (
        <div className={`d-flex justify-content-between align-items-center ${checked ? 'disabled' : ''}`} >
            <div onClick={checkItem}>   
                {checked ? <Green/> : <Check/>}
            </div>
            <li className="list-group-item text-start">{todo}</li>
            <button className="btn" onClick={deleteItem}>
                <Delete/>
            </button>
        </div>
    )
}