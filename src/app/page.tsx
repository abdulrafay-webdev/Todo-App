"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // define stat
  const [todos, settodos] = useState([
    { movie: "Task here", id: 1 },
  ]);
  const [inputval, setinput] = useState("");
  const [Id, setid] = useState(0);

  // function

  const additem = () => {
    let obj: any = todos.find((item) => item.id == Id);

    if (obj) {
      let newarray = todos.filter((item) => item.id !== obj.id);
      settodos([...newarray, { movie: inputval, id: Id }]);
      setinput("");
      setid(0);
      return
    }

    settodos([...todos, { movie: inputval, id: Id }]);
    setinput("");
    setid(0);
  };

  const edititem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setinput(obj.movie);
    setid(obj.id);
  };


  const delitem = (id:number)=>{
    let newarray = todos.filter((item) => item.id !== id);
      settodos([...newarray]);
console.log(newarray);
  }



  return (
    <div className=" max-w-4xl mx-auto p-5 overflow-hidden">
      {/* heading */}
      <h1 className="text-center text-4xl font-bold">ToDo Tasks</h1>
      {/* input and button  */}
      <div className="flex justify-between gap-1 mt-8 sm:gap-3">
        <input
          type="text"
          onChange={(e: any) => setinput(e.target.value)}
          value={inputval}
          placeholder="wrie task"
          className="border-blue-300 shadow-md w-[60%] border p-2 focus:outline-none"
        />
        <input
          placeholder="id"
          type="number"
          value={Id}
          onChange={(e: any) => setid(e.target.value)}
          className="border-blue-300 shadow-md w-[20%] border p-2 focus:outline-none"
        />
        <button
          onClick={additem}
          className="w-[20%] p-2 bg-blue-600 text-white font-bold shadow-md"
        >
          ADD
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
        {todos.map((item: any, i: any) => {
          return (
            <div key={i} className="border shadow-lg p-2">
              {/* todo elements */}
              <div className="flex justify-between p-2">
                <p className="border w-7 h-7 text-center rounded-full shadow-xl">
                  {i + 1}
                </p>
                <p onClick={()=>(delitem(item.id))} className="border w-7 h-7 text-center rounded-full shadow-xl cursor-pointer text-red-600">
                  X
                </p>
              </div>
              {/* todo name  */}
              <div>
                <h1 className="font-extrabold text-3xl p-3">{item.movie}</h1>
              </div>
              {/* todo edit element  */}
              <div className="flex justify-between p-2">
                <p className="border pt-1 pb-1 pl-2 pr-2 text-center rounded-md shadow-xl">
                  {item.id}
                </p>
                <p
                  onClick={() => {
                    edititem(item.id);
                  }}
                  className="border pt-1 pb-1 pl-2 pr-2 text-center rounded-md shadow-xl cursor-pointer"
                >
                  Edit
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
