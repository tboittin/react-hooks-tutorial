import { useEffect, useState } from "react";

export const UseFetch = ({ url }) => {
  const [thing, setThing] = useState("");
  useEffect(() => {
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setThing(y);
      });
  }, [url]);
  return thing;
};

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url]);
  return state;
};
