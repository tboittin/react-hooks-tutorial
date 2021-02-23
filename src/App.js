import { useState } from "react";
import { useForm } from "./useForms";

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [value, handleChange] = useForm({ email: "", password: "" });

  return (
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
      <input name="email" value={value.email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={value.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
