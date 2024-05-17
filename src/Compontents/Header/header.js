import React from "react";
import './header.css';
export default function TodoHeader() {
    
    return (
        <div  className="header-style">
            <div className="d-flex align-items-center justify-content-between">
                <h4 className="text-style">Things you should be doing today...</h4>
                <div>
                    <button  className="add-style">Add New</button>
                    <button className="clear-style" >Clear</button>
                </div>
                
                
            </div>
        </div>
    );
}
