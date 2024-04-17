import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';

const ShowTask = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://task-project-779m.vercel.app/tasks/${id}`)
      .then((response) => {
        setTask(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton destination="/tasks" />
      <h1 className='text-3xl my-4'>Task Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>ID</span>
            <span>{task._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Description</span>
            <span>{task.description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Due Date</span>
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Status</span>
            <span>{task.status}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Priority</span>
            <span>{task.priority}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created At</span>
            <span>{new Date(task.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Updated</span>
            <span>{new Date(task.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowTask;
