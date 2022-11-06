import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h3 key={recipe.id}>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
      <p></p>
    </div>
  );
}
