import { Link } from 'react-router-dom';
import { MdOutlineEventNote } from 'react-icons/md'; 
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import TaskSingleCard from './TaskSingleCard.jsx'; 

const TasksCard = ({ tasks }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {tasks.map((task) => (
        <TaskSingleCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksCard;
