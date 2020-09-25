import React from 'react';

const RadioBtn = (props) =>{
    console.log('props -->', props)
    return(
            <div className="form-check">
                <div className="radbuttons">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios"></input>
                <label className="form-check-label" id="labelRadios"> {props.cantPagos} </label><br></br>
                <small id="radioHelp" className="form-text text-muted">{props.monto}</small><br/>
            </div>  
            </div>
    )
}

export default RadioBtn;