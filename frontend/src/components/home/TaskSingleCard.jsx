// import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineCalendar } from 'react-icons/hi'; 
import { MdOutlinePendingActions, MdOutlinePriorityHigh, MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs'; 
import { AiOutlineEdit } from 'react-icons/ai'; 

const TaskSingleCard = ({ task }) => {
  const safeFormatDate = (date) => {
    return date ? new Date(date).toDateString() : 'No Date';
  };

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {safeFormatDate(task.dueDate)} 
      </h2>
      <h4 className='my-2 text-gray-500'>{task._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <MdOutlinePendingActions className='text-red-300 text-2xl' />
        <h2 className='my-1'>{task.status}</h2> 
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <MdOutlinePriorityHigh className='text-red-300 text-2xl' />
        <h2 className='my-1'>{task.priority}</h2> 
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <HiOutlineCalendar className='text-3xl text-blue-800 hover:text-black cursor-pointer' />
        <Link to={`/tasks/details/${task._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/tasks/edit/${task._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <button className='text-red-600 hover:text-black'>
          <MdOutlineDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskSingleCard;
