import { React, useState } from "react";

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
      <button>추가</button>
    </div>
  );
};

export default AddForm;
