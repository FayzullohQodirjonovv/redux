import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todo-slice";

const Card = ({ text, id }) => {
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(false);
  const [value, setValue] = useState(text);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const edit = () => {
    if (edited) {
      console.log("New text:", value);
    }
    setEdited(!edited);
  };

  return (
    <div className="bg-blue-500 mt-2 text-[black]  py-2 px-4 rounded-xl flex items-center justify-between w-full">
      {edited ? (
        <Input
          value={value}
          onChange={handleInputChange}
          className="text-black bg-white"
        />
      ) : (
        <p>{value}</p>
      )}
      <div className="flex items-center gap-4">
        <Button onClick={() => dispatch(deleteTodo(id))}>Delete</Button>
        <Button onClick={edit}>{edited ? "Submit" : "Edit"}</Button>
      </div>
    </div>
  );
};

export default Card;
