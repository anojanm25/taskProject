import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineCalendar } from 'react-icons/hi'; 
import { MdOutlinePendingActions, MdOutlinePriorityHigh } from 'react-icons/md'; 

const TaskModal = ({ task, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {task.dueDate.toDateString()} {/* Displaying the due date */}
        </h2>
        <h4 className='my-2 text-gray-500'>{task._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <MdOutlinePendingActions className='text-red-300 text-2xl' />
          <h2 className='my-1'>{task.status}</h2> {/* Displaying the status */}
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <MdOutlinePriorityHigh className='text-red-300 text-2xl' />
          <h2 className='my-1'>{task.priority}</h2> {/* Displaying the priority */}
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <HiOutlineCalendar className='text-red-300 text-2xl' />
          <p className='my-1'>{task.description}</p> {/* Displaying the description */}
        </div>
        <p className='mt-4'>More task details or additional notes can be shown here.</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default TaskModal;
