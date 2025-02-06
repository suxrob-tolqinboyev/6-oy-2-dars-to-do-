// import React, { useRef, useState } from "react";

// const App = () => {
//   const [todo, setTodo] = useState([]);
//   const inputRef = useRef();

//   const newLiRef = useRef();

//   function userData() {
//     const userInput = inputRef.current.value.trim();

//     if (userInput === "") {
//       alert("Mahsulot nomini kiritilgagan");
//       return;
//     }
//     if (todo.includes(userInput)) {
//       alert("Mahsulot nomini ");
//       return;
//     }

//     console.log("bosildi", userInput);
//     inputRef.current.value = "";

//     setTodo([...todo, userInput]);
//   }

//   function removeLi() {
//     if (newLiRef.current) {
//       newLiRef.current.remove();
//   }

//   return (
//     <div className="w-[583px] m-auto border-1 mt-[100px] bg-[#1D1825] pt-[50px] pb-[55px] rounded-[20px]">
//       <div className="flex flex-col- pl-[66px] gap-[8px]">
//         <input
//           className="w-[381px] h-[40px] outline-hidden text-white  border-[1px] rounded-[10px] border-[#9E78CF] pl-[12px]"
//           ref={inputRef}
//           type="text"
//           placeholder="Add a new task"
//         />
//         <button
//           onClick={userData}
//           className=" border-[1px] border-black cursor-pointer rounded-[10px] flex flex-col items-center justify-center w-[40px] h-[40px] p-[4px] text-[45px] bg-[#9E78CF] border-none text-white text-center"
//         >
//           <img className="w-[24px]" src="./src/assets/Vector (3).svg" alt="" />
//         </button>
//       </div>
//       <div>
//         <p class="text-white pt-[59px] pb-[15px] pl-[65px] justify-start">
//           Tasks to do - 4
//         </p>
//         <ul className="flex flex-col gap-[16px] pl-[65px]">
//           {todo.map((item, index) => (
//             <li
//               ref={newLiRef}
//               class="item"
//               key={index}
//               className="w-[432px] text-[#9E78CF] py-[22px] px-[21px] bg-[#15101C] rounded-[10px] flex justify-between"
//             >
//               {item}
//               <div className="flex gap-[16px]">
//                 <button className="cursor-pointer">
//                   <img src="./src/assets/Check (1).svg" alt="" />
//                 </button>
//                 <button onClick={removeLi}
//                 className="cursor-pointer">
//                   <img src="./src/assets/TrashSimple.svg" alt="" />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
// }
// export default App;

// import { useState, useRef } from "react";

// const App = () => {
//   const [todo, setTodo] = useState([]);
//   const inputRef = useRef();

//   function userData() {
//     const userInput = inputRef.current.value.trim();

//     if (userInput === "") {
//       alert("Mahsulot nomini kiriting!");
//       return;
//     }
//     if (todo.includes(userInput)) {
//       alert("Bu mahsulot allaqachon mavjud!");
//       return;
//     }

//     setTodo([...todo, userInput]);
//     inputRef.current.value = "";
//   }

//   function removeLi(itemToRemove) {
//     setTodo(todo.filter(item => item !== itemToRemove));
//   }

//   return (
//     <div className="w-[583px] m-auto border-1 mt-[100px] bg-[#1D1825] pt-[50px] pb-[55px] rounded-[20px]">
//       <div className="flex flex-col- pl-[66px] gap-[8px]">
//         <input
//           className="w-[381px] h-[40px] outline-hidden text-white border-[1px] rounded-[10px] border-[#9E78CF] pl-[12px]"
//           ref={inputRef}
//           type="text"
//           placeholder="Add a new task"
//         />
//         <button
//           onClick={userData}
//           className="border-[1px] border-black cursor-pointer rounded-[10px] flex flex-col items-center justify-center w-[40px] h-[40px] p-[4px] text-[45px] bg-[#9E78CF] border-none text-white text-center"
//         >
//           <img className="w-[24px]" src="./src/assets/Vector (3).svg" alt="" />
//         </button>
//       </div>
//       <div>
//         <p className="text-white pt-[59px] pb-[15px] pl-[65px] justify-start">
//           Tasks to do - {todo.length}
//         </p>
//         <ul className="flex flex-col gap-[16px] pl-[65px]">
//           {todo.map((item, index) => (
//             <li
//               key={index}
//               className="w-[432px] text-[#9E78CF] py-[22px] px-[21px] bg-[#15101C] rounded-[10px] flex justify-between"
//             >
//               {item}
//               <div className="flex gap-[16px]">
//                 <button className="cursor-pointer">
//                   <img src="./src/assets/Check (1).svg" alt="" />
//                 </button>
//                 <button onClick={() => removeLi(item)} className="cursor-pointer">
//                   <img src="./src/assets/TrashSimple.svg" alt="" />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//
//     </div>
//   );
// };

// export default App;

import { useState, useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const inputRef = useRef();

  function userData() {
    const userInput = inputRef.current.value.trim();

    if (userInput === "") {
      alert("Mahsulot nomini kiriting!");
      return;
    }
    if (todo.includes(userInput)) {
      alert("Bu mahsulot allaqachon mavjud!");
      return;
    }

    setTodo([...todo, userInput]);
    inputRef.current.value = "";
  }

  function removeLi(itemToRemove) {
    setTodo(todo.filter((item) => item !== itemToRemove));
  }

  function completeTask(item) {
    setCompletedTasks([...completedTasks, item]);
    setTodo(todo.filter((task) => task !== item));
  }

  return (
    <div className="w-[583px] m-auto border-1 mt-[100px] bg-[#1D1825] pt-[50px] pb-[55px] rounded-[20px]">
      <div className="flex flex-col- pl-[66px] gap-[8px]">
        <input
          className="w-[381px] h-[40px] outline-hidden text-white border-[1px] rounded-[10px] border-[#9E78CF] pl-[12px]"
          ref={inputRef}
          type="text"
          placeholder="Add a new task"
        />
        <button
          onClick={userData}
          className="border-[1px] border-black cursor-pointer rounded-[10px] flex flex-col items-center justify-center w-[40px] h-[40px] p-[4px] text-[45px] bg-[#9E78CF] border-none text-white text-center"
        >
         <FaPlus className="w-[24px] text-white" />
        </button>
      </div>
      <div>
        <p className="text-white pt-[59px] pb-[15px] pl-[65px] justify-start">
          Tasks to do - {todo.length}
        </p>
        <ul className="flex flex-col gap-[16px] pl-[65px]">
          {todo.map((item, index) => (
            <li
              key={index}
              className="w-[432px] text-[#9E78CF] py-[22px] px-[21px] bg-[#15101C] rounded-[10px] flex justify-between"
            >
              {item}
              <div className="flex gap-[16px]">
                <button
                  onClick={() => completeTask(item)}
                  className="cursor-pointer"
                >
                  {/* <img src="./src/assets/Check (1).svg" alt="" /> */}
                  <FaCheck />
                </button>
                <button
                  onClick={() => removeLi(item)}
                  className="cursor-pointer"
                >
                  {/* <img src="./src/assets/TrashSimple.svg" alt="" /> */}
                  <MdDeleteOutline className="w-[30px]" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-white pl-[65px] py-[60px] pb-[16px]">
          Done - {completedTasks.length}
        </p>
        <ul className="pl-[65px] flex gap-[16px] flex-col">
          {completedTasks.length > 0 ? (
            completedTasks.map((item, index) => (
              <li
                key={index}
                className="w-[432px] line-through text-[#78CFB0] py-[22px] px-[21px] bg-[#15101C] rounded-[10px]"
              >
                {item}
              </li>
            ))
          ) : (
            <p className="text-white">No completed items available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
