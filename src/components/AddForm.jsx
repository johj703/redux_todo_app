import React from "react";

const AddForm = () => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
    </div>
  );
};

export default AddForm;
