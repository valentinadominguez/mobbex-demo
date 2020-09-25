import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import RadioBtn from './Radiobtn';
import Boton from './Boton';




function App () {
  
  var valorTotal = "$100";

  function showOptions (event){
    var cardNumber = document.getElementById("cardnumber").value;
    const number = event.target.value
    console.log('number -->', number.lenght);
    console.log(cardNumber.lenght);
    console.log(cardNumber);
      if (cardNumber.lenght >= 5 ){
        alert("HOLA MUNDO");
      } 
    }

  return (
      <div className="App">
        <div className="container">
          <div className="form">
            <div className="col-md-12">   
              <div className="header" align="center">
                <img src="mobbex.png" alt="Mobbexlogo" />
              </div>        
              <form>
                <h2>BOLD SPECIALTY COFFEE S.A.S.</h2>
                <input className="labels" name="cardnumber" id="cardnumber" type="text" placeholder="Número de tarjeta" onChange={ (event) =>showOptions(event)}/>
                <input className="labels" name="name" id="name" type="text" placeholder="Nombre (Como aparece en la tarjeta)" />
                <input className="labels" name="dni" id="dni" type="text" placeholder="Número de documento" />
          
                <div className="flex-container"> 
                  <div className="col-md-6">  
                    <input className="labels" name="expiration" id="expiration" type="text" placeholder="Vencimiento" />
                    <small id="expirationHelp" className="form-text text-muted">Ej: 08/21 (MM/AA)</small>
                  </div>  
                  <div className="col-md-6">  
                    <input className="labels" name="securitycode" id="securitycode" type="text" placeholder="Código de seguridad"/>
                    <small id="codeHelp" className="form-text text-muted">Código de 3 dígitos en la parte trasera</small>
                  </div>  
                </div>
                <br></br>
                <div className="col-md-12">
                {/* <div className="d-none"> */}
                <RadioBtn cantPagos="1 Pago" monto="1 Pago de XX"/>
                <RadioBtn cantPagos="3 Pagos" monto="3 Pagos de XX"/>
                <RadioBtn cantPagos="6 Pagos" monto="6 Pagos de XX"/>
                <RadioBtn cantPagos="9 Pagos" monto="9 Pagos de XX"/>
                <RadioBtn cantPagos="12 Pagos" monto="12 Pagos de XX"/>
                {/* </div> */}
                </div>
                <hr></hr>
                <h3><b>TOTAL </b>{valorTotal}</h3>
                <Boton/>
              </form> 
            </div>
          </div>
        </div>
      </div>    
  
    
    
  );
  }
  
export default App;
