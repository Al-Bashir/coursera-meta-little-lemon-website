import React from 'react'
import SpecialItem from './SpecialItem'
import GreekSalad from '../assets/icons_assets/greek_salad.jpg'
import bruchetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemondessert.jpg'

const Specials = () => {
    const items = [
        {
            id: 1,
            img: GreekSalad,
            name: 'Greek Salad',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            id: 2,
            img: bruchetta,
            name: 'Bruchetta',
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
        },
        {
            id: 3,
            img: lemonDessert,
            name: 'Lemon Dessert',
            price: '$5.00',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        }
    ]
    return (
        <section id="menu" className="container">
            <header>
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </header>
            <div className="content">
                {
                    items.map(item => <SpecialItem key={item.id} img={item.img} name={item.name} description={item.description} price={item.price}/>)
                }
            </div>
        </section>
    )
}

export default Specials