import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditTask = () => {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://task-project-779m.vercel.app/tasks/${id}`)
    .then((response) => {
        setDescription(response.data.description);
        setDueDate(response.data.dueDate.slice(0, 10));  
        setStatus(response.data.status);
        setPriority(response.data.priority);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [id])

  const handleEditTask = () => {
    const data = {
      description,
      dueDate,
      status,
      priority,
    };
    setLoading(true);
    axios
      .put(`http://localhost:7777/tasks/${id}`, data)
      .then(() => {
        enqueueSnackbar('Task Edited successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4'>Edit Task</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Due Date</label>
          <input
            type='date'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full '
          >
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full '
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditTask}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditTask;
