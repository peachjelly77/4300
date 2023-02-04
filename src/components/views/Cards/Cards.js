import React from 'react'
import remouladeSauce from '../img/remouladeSauce.jpg';
import tomatoSoup from '../img/tomatoSoup.png';
import sloppyJoes from '../img/sloppyJoes.jpeg';
import pbjSmoothie from '../img/pbjSmoothie.jpeg';
import chocolateIceCream from '../img/chocolateIceCream.jpeg';

function Cards() {
    return (
        <div class="cardContainer">
            <div class="card breakfastCard">
                <div class="cardTitle">PB and J Smoothie</div>
                <div class="cardIngredients">
                    <span class="u">Ingredients</span>
                    <ul>
                        <li>6 - Frozen Strawberries</li>
                        <li>3/4 cup - Milk</li>
                        <li>1 1/2 tbsp - Peanut Butter</li>
                        <li>1 tbsp - Blue Agave Nectar</li>
                        <li>2 tbsp - Flax Seeds</li>

                    </ul>
                </div>
                <div class="cardRecipe">
                    <span class="u">Recipe</span>
                    <ol>
                        <li>Combine the ingredients in a blender.</li>
                        <li>Blend until well combined and smooth.</li>
                    </ol>
                </div>
                <div class="cardPhoto"><img src={pbjSmoothie} alt="PB and J Smoothie"/></div>
            </div>
            <div class="card lunchCard">
                <div class="cardTitle">Sloppy Joes</div>
                <div class="cardIngredients">
                    <span class="u">Ingredients</span>
                    <ul>
                        <li>1 lb - Ground Beef</li>
                        <li>1/4 cup - Chopped Onion</li>
                        <li>1/4 cup - Chopped Green Bell Pepper</li>
                        <li>3/4 cup- Ketchup</li>
                        <li>1 tbsp - Brown Sugar</li>
                        <li>1 tsp - Yellow Mustard</li>
                        <li>1/4 tsp - Salt</li>
                        <li>1/4 tsp - Pepper</li>
                        <li>6 - Hamburger Buns</li>
                    </ul>
                </div>
                <div class="cardRecipe">
                    <span class="u">Recipe</span>
                    <ol>
                        <li>Heat a large skillet over medium heat. Cook and stir lean ground beef in the hot skillet until some of the fat starts to render, 3 to 4 minutes. </li>
                        <li>Add onion and bell pepper; continue to cook until vegetables have softened and beef is cooked through, 3 to 5 more minutes.</li>
                        <li>Stir in ketchup, brown sugar, mustard, and garlic powder; season with salt and pepper. Reduce heat to low and simmer for 20 to 30 minutes.</li>
                        <li> Divide meat mixture evenly among hamburger buns.</li>
                    </ol>
                </div>
                <div class="cardPhoto"><img src={sloppyJoes} alt="Sloppy Joes"/></div>
            </div>
            <div class="card dinnerCard">
                <div class="cardTitle">Tomato Soup</div>
                <div class="cardIngredients">
                    <span class="u">Ingredients</span>
                    <ul>
                        <li>4 cups - Chopped Tomatoes</li>
                        <li>1 - Onion Slice</li>
                        <li>4 - Garlic Cloves</li>
                        <li>2 cups - Chicken Broth</li>
                        <li>2 tbsp - Butter</li>
                        <li>2 tbsp - All-Purpose Flour</li>
                        <li>1 tsp - Salt</li>
                        <li>2 tsp - White Sugar</li>
                    </ul>
                </div>
                <div class="cardRecipe">
                    <span class="u">Recipe</span>
                    <ol>
                        <li>In a stockpot, over medium heat, combine tomatoes, onion, garlic cloves, and chicken broth.</li>
                        <li>Bring to a boil. Gently boil for about 20 minutes to blend all of the flavors.</li>
                        <li>Remove from heat and run the mixture through a food mill into a large bowl. Discard any stuff left over in the food mill.</li>
                        <li>Place in refridgerator to chill for at least 1 hour.</li>
                        <li>In the stockpot, melt the butter over medium heat. Stir in the flour to make a roux, cooking until the roux is a medium brown.</li>
                        <li>Gradually whisk in a bit of the tomato mixture, so that no lumps form, then stir in the rest. Season with sugar and salt, and adjust to taste.</li>
                    </ol>
                </div>
                <div class="cardPhoto"><img src={tomatoSoup} alt="TomatoSoup"/></div>
            </div>
            <div class="card dessertCard">
                <div class="cardTitle">Chocolate Ice Cream</div>
                <div class="cardIngredients">
                    <span class="u">Ingredients</span>
                    <ul>
                        <li>1 cup - Milk</li>
                        <li>3/4 cup - White Sugar</li>
                        <li>2 tbsp - Unsweetened Cocoa Powder</li>
                        <li>1/4 tsp - Salt</li>
                        <li>3 - Egg Yolks</li>
                        <li>1/8 cup - Semisweet Chopped Chocolate</li>
                        <li>2 cups - Heavy Cream</li>
                        <li>1 tsp - Vanilla Extract</li>
                    </ul>
                </div>
                <div class="cardRecipe">
                    <span class="u">Recipe</span>
                    <ol>
                        <li>Combine milk, sugar, cocoa powder, and salt in a saucepan over medium heat. Bring to a simmer, stirring constantly.</li>
                        <li>Place egg yolks into a small bowl. Gradually whisk in about 1/2 cup of hot milk mixture, then return to the saucepan. Heat and stir until thickened, but do not boil.</li>
                        <li>Remove from heat and stir in chopped chocolate until melted.</li>
                        <li>Pour into a chilled bowl and refrigerate, stire occasionally, and leav in refrigerator for about 2 hours.</li>
                        <li>Stir in cream and vanilla. Pour into an ice cream maker and freeze according to manufacturer's directions.</li>
                    </ol>
                </div>
                <div class="cardPhoto"><img src={chocolateIceCream} alt="Chocolate Ice Cream"/></div>
            </div>
            <div class="card sideCard">
                <div class="cardTitle">Homemade Remoulade Sauce</div>
                <div class="cardIngredients">
                    <span class="u">Ingredients</span>
                    <ul>
                        <li>1 1/4 cups - Mayonnaise</li>
                        <li>1/4 cup - Creole Mustard</li>
                        <li>1 tbsp - Sweet Paprika</li>
                        <li>1 tsp - Cajun Seasoning</li>
                        <li>2 tsp - Prepared Horseradish</li>
                        <li>1 tsp - Pickle Juice</li>
                        <li>1 tsp - Tabasco Sauce</li>
                        <li>2 tsp - Minced Garlic</li>
                    </ul>
                </div>
                <div class="cardRecipe">
                    <span class="u">Recipe</span>
                    <ol>
                        <li>Mix all the ingredients together in a medium bowl.</li>
                        <li>Place in refridgerator to chill for at least 1 hour.</li>
                    </ol>
                </div>
                <div class="cardPhoto"><img src={remouladeSauce} alt="Remoulade Sauce"/></div>
            </div>
            <div class="card">
                <div class="cardTitle">Homemade Remoulade Sauce</div>
                <div class="cardIngredients">
                    <span class="u">Ingredients</span>
                    <ul>
                        <li>1 1/4 cups - Mayonnaise</li>
                        <li>1/4 cup - Creole Mustard</li>
                        <li>1 tbsp - Sweet Paprika</li>
                        <li>1 tsp - Cajun Seasoning</li>
                        <li>2 tsp - Prepared Horseradish</li>
                        <li>1 tsp - Pickle Juice</li>
                        <li>1 tsp - Tabasco Sauce</li>
                        <li>2 tsp - Minced Garlic</li>
                    </ul>
                </div>
                <div class="cardRecipe">
                    <span class="u">Recipe</span>
                    <ol>
                        <li>Mix all the ingredients together in a medium bowl.</li>
                        <li>Place in refridgerator to chill for at least 1 hour.</li>
                    </ol>
                </div>
                <div class="cardPhoto"><img src={remouladeSauce} alt="Remoulade Sauce"/></div>
            </div>
        </div>
    );
}

export default Cards