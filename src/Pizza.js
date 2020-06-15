import React, {useState} from "react";

const Pizza = () => {
    const [sauce, sauceSelected] = useState('original');
    const [toppingCount, setToppingCount] = useState('0');

    // const radioChange = (e) => {
    //     sauceSelected: e.target.value;
    // };


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
                <p>Choose up to 4 Toppings</p>
                <div className = "toppings1">
                    <label htmlFor="toppings1">
                        <input id="pepperoni" type="checkbox"name="original"/>
                        Pepperoni
                        <input id="sausage" type="checkbox"name="original"/>
                        Sausage
                        <input id="canadianbacon" type="checkbox"name="original"/>
                        Canadian Bacon
                        <input id="italiansausage" type="checkbox"name="original"/>
                        Spicy Italian Sausage
                        <input id="grilledchicken" type="checkbox"name="original"/>
                        Grilled Chicken
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Onions
                        <input id="greenpepper" type="checkbox"name="original"/>
                        Green Pepper
                    </label>
                </div>
                <div className = "toppings2">
                    <label htmlFor="toppings2">
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Diced Tomatoes
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Black Olives
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Roasted Garlic
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Artichoque Hearts
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Three Cheese
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Pineapple
                        <input id="pizza-sauce-original" type="checkbox"name="original"/>
                        Extra Cheese
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Pizza;