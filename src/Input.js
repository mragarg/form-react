import React from 'react';

function Input({handleChange}){
    return (
        <form>
            <div className="form-group">
            <input 
                onChange={(e) => {
                    console.log(e.target.value);
                    handleChange(e.target.value);
                }}
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Type some stuff" />
            </div>
        </form>
    );
}

export default Input;