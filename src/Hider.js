import React from 'react';
import RadioBtn from './Radiobtn';


export default class Hider extends React.Component {
    constructor() {
        super();
        
        this.state = { hide: true };
    }
    
    handleClick() {
        this.setState({hide: false});
    }

    render() {
        var className = this.state.hide ? 'd-none' : '';
    
        return <div id="hider" className={className}>
                    <RadioBtn cantPagos="1 Pago" monto="1 Pago de XX"/>
                    <RadioBtn cantPagos="3 Pagos" monto="3 Pagos de XX"/>
                    <RadioBtn cantPagos="6 Pagos" monto="6 Pagos de XX"/>
                    <RadioBtn cantPagos="9 Pagos" monto="9 Pagos de XX"/>
                    <RadioBtn cantPagos="12 Pagos" monto="12 Pagos de XX"/>
                </div>;
    }
}