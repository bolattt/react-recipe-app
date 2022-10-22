import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async (url) => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted.");
        } else {
          setIsPending(false);
          console.log("Could not fetch data!");
        }
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, err };
}
