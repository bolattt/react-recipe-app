import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No Recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3 key={recipe.id}>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            src={Trashcan}
            alt=""
            onClick={() => handleClick(recipe.id)}
            className="delete"
          />
        </div>
      ))}
      <p></p>
    </div>
  );
}
