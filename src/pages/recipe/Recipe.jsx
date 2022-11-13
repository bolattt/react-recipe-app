import { useParams, useEffect } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";
import "./Recipe.css";
function Recipe() {
  const { mode } = useTheme();
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes/" + id);

  return (
    <div className={`recipe ${mode}`}>
      {error && "Errror"}
      {isPending && "Loading..."}
      {recipe && (
        <>
          <h3 key={recipe.id}>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <p>{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
