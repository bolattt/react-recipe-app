import useFetch from "../../hooks/useFetch";
import "./Home.css";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  console.log(data, isPending, error);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
}
