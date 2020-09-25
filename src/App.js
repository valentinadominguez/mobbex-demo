import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Boton from './Boton';
import Hider from './Hider';


function App () {
  
  var valorTotal = "$100";

  function showOptions (event){
    var cardNumber = document.getElementById("cardnumber").value;

    var numbers = /^[0-9]+$/;
    if(!cardNumber.match(numbers))
    {
      document.getElementById("cardnumber").value = document.getElementById("cardnumber").value.substring(0, cardNumber.length - 1);
    }

    var hider = document.getElementById("hider");
      
    if (cardNumber.length >= 5 ){
        hider.className = "";
      } else {
        hider.className = "d-none";
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
                  <div style={{marginRigth: '5px'}}>
                    <input className="labels" name="expiration" id="expiration" type="text" placeholder="Vencimiento" />
                    <small id="expirationHelp" className="form-text text-muted">Ej: 08/21 (MM/AA)</small>
                  </div>  
                  <div style={{marginLeft: '5px'}}>
                    <input className="labels" name="securitycode" id="securitycode" type="text" placeholder="Código de seguridad"/>
                    <small id="codeHelp" className="form-text text-muted">Código de 3 dígitos en la parte trasera</small>
                  </div>  
                </div>
                <br></br>
                <div className="col-md-12">
                  <Hider />
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
