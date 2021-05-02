import React from 'react';
import './index.css';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title: 'XYZ',
            price: 999,
            Qty: 1,
            img: ''
         }
    }
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}src=""/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color: '#777'}}>Rs. {this.state.price}</div>
                    <div style={{color: '#777'}}>Qty: {this.state.Qty}</div>
                    <div className="icons">

                    </div>
                </div>
                
            </div>

        );
    }
}

const styles={
    image:{
        height: 60,
    width: 90,
    background:'grey' ,
borderRadius: 4}
}
export default CartItem;