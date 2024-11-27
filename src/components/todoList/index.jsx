import React, { useReducer, useState } from "react";
function TodoList() {
  const [text, setText] = useState("");

  const initialState = [];

  const reducer = (state, { type, text, id }) => {
    switch (type) {
      case "Add":
        return [...state, { id: Date.now(), list: text }];
      case "Delete":
        return state.filter((value) => value.id !== id);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col gap-5 card bg-gradient-to-t  mx-auto mt-14  justify-center from-gray-900 via-purple-800 to-purple-600 w-[40%] h-auto p-5 rounded-[20px]">
      <h1 className="font-bold text-[45px] text-white/90">Shoping List</h1>

      <form className="flex items-center gap-5 w-[80%]">
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Inter massage"
          className="w-[85%] h-[35px] bg-white/70 text-gray-900 pl-3 pr-3 text-sm outline-none rounded-[5px] focus:ring-2 focus:ring-purple-500"
          type="text"
          value={text}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "Add", text });
            setText("");
          }}
          className="w-[25%] h-[35px] bg-[#FF7F00] text-white flex items-center justify-center rounded-[3px] text-sm hover:bg-[#FFB800] transition-all duration-300"
        >
          Add
        </button>
      </form>

      <div className="mt-4 text-white flex flex-col gap-3 w-[100%]">
        {state.map((value) => (
          <div
            key={value.id}
            className="flex items-center justify-between w-full border-[1px] border-white/70 p-2 rounded-[5px] bg-gray-800"
          >
            <p className="text-lg font-semibold">{value.list}</p>

            <div className="flex items-center gap-3">
              <button className="text-yellow-400 transition-all duration-300 border-[1px] w-[45px] h-[25px] rounded-[3px] border-yellow-400 hover:bg-yellow-400 hover:text-black">
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: "Delete", id: value.id })}
                className="text-red-400 transition-all duration-300 border-[1px] w-[45px] h-[25px] rounded-[3px] border-red-400 hover:bg-red-400 hover:text-black"
              >
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
