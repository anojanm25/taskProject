import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const TasksTable = ({ tasks }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Description</th>
          <th className='border border-slate-600 rounded-md'>Due Date</th>
          <th className='border border-slate-600 rounded-md'>Status</th>
          <th className='border border-slate-600 rounded-md'>Priority</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {task.description}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {new Date(task.dueDate).toLocaleDateString()}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {task.status}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {task.priority}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/tasks/details/${task._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/tasks/edit/${task._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/tasks/delete/${task._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
