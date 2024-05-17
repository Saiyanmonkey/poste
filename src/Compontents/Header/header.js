import React from "react";

export default function TodoHeader() {
    const style = {
        width: '800px',
        height: '40px',
        position: 'absolute',
        top: '76px',
        left: '50%',
        transform: 'translateX(-50%)',
        gap: '16px',
    };

    const textStyle = {
        width: '606px',
        height: '28px',
        gap: '0px',

    };

    const addStyle = {
        padding: '8px 16px',
        gap: '10px',
        borderRadius: '8px',
        background: '#075985',
        color: '#F0F9FF',
        border: 'none',
        marginRight: '10px'
    };

    const clearStyle = {
        padding: '8px 16px',
        gap: '10px',
        borderRadius: '8px',
        color: '#BE123C',
        border: 'none'
    };
    
    return (
        <div style={style}>
            <div className="d-flex align-items-center justify-content-between">
                <h4 style={textStyle}>Things you should be doing today...</h4>
                <div>
                    <button style = {addStyle} className="mr-10">Add New</button>
                    <button style = {clearStyle} >Clear</button>
                </div>
                
                
            </div>
        </div>
    );
}
