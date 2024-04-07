
// import React, { useState } from 'react';

// const Main = () => {
//   const date = new Date().toLocaleDateString('en-us', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   });

//   const [tasks, setTasks] = useState([]);
//   const [inputVal, setInputVal] = useState('');

//   function handleChange(e) {
//     setInputVal(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (inputVal.trim() !== '') {
//       setTasks([...tasks, inputVal]);
//       setInputVal('');
//     }
//   }

//   function handleDelete(index) {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   }

//   return (
//     <div className='w-4/12 mx-auto'>
//       <div className='text-purple-600 text-3xl bg-slate-300 font-bold text-center'>
//         {date}
//       </div>
//       <div className='bg-white p-4'>
//         <form className='text-center' onSubmit={handleSubmit}>
//           <div className="flex justify-center"> 
//             <input
//               type='text'
//               value={inputVal}
//               onChange={handleChange}
//               className='flex mr-4 w-3/4 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//               placeholder='Enter Task'
//               required
//             />
//             <button
//               type='submit'
//               className='focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-green-600 hover:bg-green-700'
//             >
//               +
//             </button>
//           </div>
//         </form>
//         <ul>
//           {tasks.map((task, index) => (
//             <li key={index} className='mt-5 flex justify-between mx-5'>
//               <h3>{task}</h3>
//               <button
//                 onClick={() => handleDelete(index)}
//                 type='button'
//                 className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700'
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState } from 'react';

const Main = () => {
  const date = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState('');

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputVal.trim() !== '') {
      setTasks([...tasks, inputVal]);
      setInputVal('');
    }
  }

  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className='w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto mt-40'>
      <div className='text-purple-600 text-3xl bg-slate-300 font-bold text-center'>
        {date}
      </div>
      <div className='bg-white p-4'>
        <form className='text-center' onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center justify-center"> 
            <input
              type='text'
              value={inputVal}
              onChange={handleChange}
              className='mb-2 md:mb-0 mr-0 md:mr-4 w-full md:w-3/4 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Enter Task'
              required
            />
            <button
              type='submit'
              className='focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-green-600 hover:bg-green-700'
            >
              +
            </button>
          </div>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='mt-5 flex justify-between mx-5'>
              <h3>{task}</h3>
              <button
                onClick={() => handleDelete(index)}
                type='button'
                className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700'
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
