import React from 'react'
import showLogin from '../Header/showLogin/showLogin'
import recipeLogo from '../img/recipeLogo.jpeg'
import LoginPage from '../LoginPage/LoginPage';



function Header() {

    return (
        <div>
            <div class="spacer"></div>
            <div class="header">
                <div class="spacer"></div>
                <div class="logo">
                    <div class="logoColumnLeft"><img src={recipeLogo} alt="Logo"/></div>
                    <div class="logoColumnRight">
                        <div class="subtitle">Designed By: Avery Botts, Alicia Pitts, and EJ Kim</div>
                        <div id="loginArea" class="hide">
                            <div class="login">
                                Welcome to Virtual Recipe Book!<br/>
                                Please Log In Below!<br/><br/>
                                <LoginPage />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="headerButtons">
                    <div class="recipeDropdown">
                        <ul>
                            <li id="breakfastCard">Breakfast</li>
                            <li id="lunchCard">Lunch</li>
                            <li id="dinnerCard">Dinner</li>
                            <li id="sideCard">Sides</li>
                            <li id="dessertCard">Dessert</li>
                        </ul>
                    </div>
                    <div class="loginButton" id="loginButton" onClick={showLogin}>Login Button</div>
                </div>
            </div>
            <div class="spacer"></div>
        </div>
    );
}

export default Header;