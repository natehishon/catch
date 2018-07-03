import React from "react";
import {formatPrice} from '../helpers'

class Fish extends React.Component {
    render(){
        const {name, image, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={image}></img>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out!'}</button>

            </li>
        )
    }
}

export default Fish;