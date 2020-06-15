import React, {useState} from "react";
import "./Pizza.css";

const Pizza = () => {
    const [sauce, sauceSelected] = useState('original');
    const [toppingCount, setToppingCount] = useState('0');

    return (
        <div className="pizza-form">
            <form >
                <h1>Build Your Own Pizza</h1> 
                <h2>Name your pizza!</h2>
                <label htmlFor="name">
                    
                    <input id="pizza-name" type="text" name="name"/>
                </label>
                <h2>Choice of Size</h2>
                <label htmlFor="size">
                    
                    <select id="pizza-size" name="sizelist">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">Extra Large</option>
                    </select>
                </label>
                <h2>Choice of Sauce</h2>
                <label htmlFor="size">
                    <input id="pizza-sauce-original" type="radio"name="original" checked={sauce === "original"} onClick={() => sauceSelected('original')} className="sauceCheck"/>
                    Original Sauce
                    <input id="pizza-sauce-garlic" type="radio"name="garlic" checked={sauce === "garlic"} onClick={() => sauceSelected('garlic')} className="sauceCheck"/>
                    Garlic Ranch
                    <input id="pizza-sauce-ranch" type="radio"name="bbq" checked={sauce === "bbq"} onClick={() => sauceSelected('bbq')} className="sauceCheck"/>
                    BBQ Sauce
                    <input id="pizza-sauce-bbq" type="radio"name="spinach" checked={sauce === "spinach"} onClick={() => sauceSelected('spinach')} className="sauceCheck"/>
                    Spinach Alfredo
                </label>
                <h2>Add Toppings</h2>
                <p>Choose up to 10 Toppings</p>
                <div className = "toppings1">
                    <label htmlFor="toppings1">
                        <input id="pepperoni" type="checkbox"name="pepperoni"/>
                        Pepperoni
                        <input id="sausage" type="checkbox"name="sausage"/>
                        Sausage
                        <input id="canadianbacon" type="checkbox"name="canadianbacon"/>
                        Canadian Bacon
                        <input id="italiansausage" type="checkbox"name="italiansausage"/>
                        Spicy Italian Sausage
                        <input id="grilledchicken" type="checkbox"name="grilledchicken"/>
                        Grilled Chicken
                        <input id="onions" type="checkbox"name="onions"/>
                        Onions
                        <input id="greenpepper" type="checkbox"name="greenpepper"/>
                        Green Pepper
                    </label>
                </div>
                <div className = "toppings2">
                    <label htmlFor="toppings2">
                        <input id="dicedtomatoes" type="checkbox"name="dicedtomatoes"/>
                        Diced Tomatoes
                        <input id="blackolives" type="checkbox"name="blackolives"/>
                        Black Olives
                        <input id="roastedgarlic" type="checkbox"name="roastedgarlic"/>
                        Roasted Garlic
                        <input id="artichoque" type="checkbox"name="artichoque"/>
                        Artichoque Hearts
                        <input id="threecheese" type="checkbox"name="threecheese"/>
                        Three Cheese
                        <input id="pineapple" type="checkbox"name="pineapple"/>
                        Pineapple
                        <input id="extracheese" type="checkbox"name="extracheese"/>
                        Extra Cheese
                    </label>
                </div>
                <h2>Choice of substitute</h2>
                <label htmlFor="glutenSwitch">
                    <input type="checkbox"/>
                    Gluten Free (+$1.00)
                </label>
                <h2>Special Instructions</h2>
                <label htmlFor="specialinstrcutions">
                    <input id="instructions" type ="text"/>
                </label>
                <button>Add to order</button>
            </form>
        </div>
    );
}

export default Pizza;