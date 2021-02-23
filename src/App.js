import { useState, useEffect } from "react";
import { Hello } from "./Hello";
import { useForm } from "./useForms";
import { UseFetch, useFetch } from "./useFetch";

const App = () => {
  const [{ count, count2 }, setCount] = useState({
    count: JSON.parse(localStorage.getItem("count")),
    count2: 20,
  });
  const [value, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const [showHello, setShowHello] = useState(true);

  const [mouseMove, setMouseMove] = useState({});

  // useFetch("");

  useEffect(() => {
    const onMouseMove = (e) => {
      setMouseMove(e);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>
        {showHello && <Hello />}
        <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      </div>
      <div>
        <button
          onClick={() =>
            setCount((currentState) => ({
              //needs to be destructured since the element is an object
              ...currentState, //If I don't put this it deletes count 2
              count: currentState.count + 1,
            }))
          }
        >
          +
        </button>
        <div>Count: {count}</div>
        <div>Count2: {count2}</div>
      </div>
      <div>
        email:{" "}
        <input name="email" value={value.email} onChange={handleChange} />
        <br />
        password:{" "}
        <input
          name="password"
          type="password"
          value={value.password}
          onChange={handleChange}
        />
        <br />
        first name:{" "}
        <input
          name="firstName"
          value={value.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        mouseX: {mouseMove.clientX} <br />
        mouseY: {mouseMove.clientY}
      </div>
      <div>
        {/* <UseFetch url={`http://numbersapi.com/${mouseMove.clientX}/trivia`} /> */}
        <br />

        {loading ? "..." : data}
      </div>
    </div>
  );
};

export default App;
