import React from 'react'
import {useState} from 'react';
import RegisterPage from '../RegisterPage/RegisterPage';
import showRegister from './showRegister/showRegister';


function Footer() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [Ingredients, setIngredients] = useState('');
    const [Recipe, setRecipe] = useState('');
    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();

        //clear all input vcalues in the form
        setUserName('');
        setUserEmail('');
        setIngredients('');
        setRecipe('');
    };

    return(
        <section className="footer">
        <div class="footerSpacer"></div>
        <form onSubmit={handleSubmit}>
        <div class="footer_inside">
        <div class="fItem1">
            <div className="form-group">
                <label htmlFor="userName">Name:</label>
                <br/>
                <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    placeholder="Ex. John Smith"
                    onChange={event => setUserName(event.target.value)}
                    value={userName}
                    />
            </div>
        </div>
        <div class="fItem2">
            <div className="form-group">
                <label htmlFor="userEmail">Email:</label>
                <br/>
                <input
                    id="user_email"
                    name="user_email"
                    type="text"
                    placeholder="Ex. john@smith.com"
                    onChange={event => setUserEmail(event.target.value)}
                    value={userEmail}
                    />
            </div>
        </div>
        <div class="fItem3">
            <button type="submit">Submit form</button>
        </div>
        <div class="fItem4"><br/>Submit your own recipe to us!
        </div>
        <div class="fItem5">
            <div className="form-group">
                <textarea
                rows="5" 
                columns="50"
                id="user_ingredients"
                name="user_ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={event => setIngredients(event.target.value)}
                value={Ingredients}
                />
            </div>
        </div>
        <div class="fItem6">
            <div className="form-group">
                <textarea
                rows="5" 
                columns="50"
                id="user_recipe"
                name="user_recipe"
                type="text"
                placeholder="Recipe"
                onChange={event => setRecipe(event.target.value)}
                value={Recipe}
                />
            </div>
        </div>
        <div class="fItem7">
        <div id="registerArea" class="hide">
            <div class="register"><RegisterPage/></div>
        </div>
        </div>
        <div class="fItem8">
        <div class="registerButton" id="registerButton" onClick={showRegister}>registerButton</div>
        </div>
        <div class="spacer"></div> 
        </div>
        </form>
        </section>
        );
    }

export default Footer