import React from "react";

const Pizza = () => {
    return (
        <div className="pizza-form">
            <form >
                <h1>Build Your Own Pizza</h1> 
                <label htmlFor="name">
                    Choice of Size
                    <select id="pizza-size" name="sizelist">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">Extra Large</option>
                    </select>
                </label>
            </form>
        </div>
    );
}

export default Pizza;