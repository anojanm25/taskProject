//Edit this file
import React, { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateTasks = () => {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending'); 
  const [priority, setPriority] = useState('medium'); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveTask = () => {
    const data = {
      description,
      dueDate,
      status,
      priority,
    };
    setLoading(true);
    axios
      .post('https://task-project-779m.vercel.app/tasks', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Task Created successfully', { variant: 'success' });
        navigate('/'); 
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error creating task', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton destination="/tasks" />
      <h1 className='text-3xl my-4'>Create Task</h1>
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
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
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
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTask}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateTasks;
