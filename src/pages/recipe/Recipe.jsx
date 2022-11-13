import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Recipe.css";
function Recipe() {
  const { mode } = useTheme();
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        console.log(doc);
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Couldn't find recipe!");
        }
      });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Something new",
    });
  };
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">"Loading..."</p>}
      {recipe && (
        <>
          <h3 key={recipe.id}>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <p>{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
}

export default Recipe;
