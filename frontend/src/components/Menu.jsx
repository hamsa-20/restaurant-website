import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Appetizers
Bruschetta
Grilled bread topped with a fresh tomato-basil mixture and drizzled with balsamic glaze.

Stuffed Mushrooms
Mushrooms filled with a savory blend of cheese, garlic, and herbs, baked to perfection.

Calamari
Lightly breaded and fried calamari served with marinara sauce and lemon wedges.

Salads
Caesar Salad
Crisp romaine lettuce, Parmesan cheese, and croutons, tossed in a creamy Caesar dressing.

Greek Salad
Mixed greens, tomatoes, cucumbers, olives, feta cheese, and red onions, served with a tangy Greek dressing.

House Salad
A mix of fresh greens, cherry tomatoes, cucumbers, and carrots, served with your choice of dressing.

Main Courses
Grilled Salmon
Fresh salmon fillet grilled to perfection, served with a side of seasonal vegetables and rice.

Chicken Parmesan
Breaded chicken breast topped with marinara sauce and melted mozzarella, served over a bed of spaghetti.

Vegetable Stir-Fry
A colorful mix of fresh vegetables sautéed in a savory sauce, served with steamed rice.

Pastas
Spaghetti Carbonara
Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese.

</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu