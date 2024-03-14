import React from "react";

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string[];
}

const defaultProps: RecipeProps = {
  title: "Sernik Wiedeński",
  ingredients: [
    "1 kg twarogu",
    "1/2 szklanki cukru",
    "1/2 szklanki masła",
    "4 jajka",
    "1/2 szklanki mąki",
    "1/2 szklanki rodzynek",
    "1/2 szklanki orzechów",
    "1/2 szklanki skórki pomarańczowej",
  ],
  instructions: [
    "Twaróg przetrzeć przez sito.",
    "Dodać cukier, masło, żółtka, mąkę, rodzynki, orzechy i skórkę pomarańczową.",
    "Białka ubić na sztywno i delikatnie wmieszać do masy serowej.",
    "Masę wylać do formy i piec w piekarniku nagrzanym do 180 stopni przez 1 godzinę.",
  ],
};

function Recipe({ title = defaultProps.title, ingredients = defaultProps.ingredients, instructions = defaultProps.instructions }: RecipeProps) {
  return (
    <div className="m-2">
      <h2>{title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;
