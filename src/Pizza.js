import React from "react";

const Pizza = () => {
    return (
        <div className="pizza-form">
            <form onSubmit={formSubmit}>  
                <label htmlFor="name">
                    Choice of Size
                    <select id="pizza-size" name="sizelist">
                        <option value="small">Small</option>
                        <option value="medium">Small</option>
                        <option value="large">Small</option>
                        <option value="xlarge">Extra Large</option>
                    </select>
                </label>
            </form>
        </div>
    );
}

export default Pizza;