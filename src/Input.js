import React from 'react';

function Input(props){
    return (
        <form>
            <div className="form-group">
            <input 
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