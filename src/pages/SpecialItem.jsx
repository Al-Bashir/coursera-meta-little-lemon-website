import React from 'react'
import deliveryIcon from '../assets/icons_assets/delivery-icon.svg'

const SpecialItem = (props) => {
    return (
        <div className="s-card">
            <div className="img">
                <img src={props.img} alt={`${props.name} dish`} />
            </div>
            <div className="head">
                <h3>{props.name}</h3>
                <div className="price">{props.price}</div>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
            <button>
                Order a delivery
                <img src={deliveryIcon} alt="delivery icon" />
            </button>
        </div>
    )
}

export default SpecialItem