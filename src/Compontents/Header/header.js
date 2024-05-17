import React from "react";
import './header.css';

export default function TodoHeader({add, changeAdd, setTodos, setDisabledIndices, setCheckedIndices,}) {
    
    function clearTodos() {
        setTodos([]);
        setDisabledIndices([]);
        setCheckedIndices([]);
    }
    return (
        <div  className="header-style">
            <div className="d-flex align-items-center justify-content-between">
                <h4 className="text-style">Things you should be doing today...</h4>
                <div>
                    {!add && (
                        <button className="add-style" onClick={changeAdd}>Add New</button>
                    ) }
                    <button className="clear-style" onClick={clearTodos}>Clear</button>
                </div>
            </div>
            
        </div>
    );
}
