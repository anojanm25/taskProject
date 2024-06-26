import { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteTask = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();  
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteTask = () => {
    setLoading(true);
    axios.delete(`https://task-project-779m.vercel.app/tasks/${id}`)  
      .then(() => {
        enqueueSnackbar('Task Deleted successfully', { variant: 'success' });
      })
      .catch((error) => {
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        navigate('/');  
      });
  };
  

  return (
    <div className='p-4'>
      <BackButton destination="/tasks" />  
      <h1 className='text-3xl my-4'>Delete Task</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this task?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteTask}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteTask;
