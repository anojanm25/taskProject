import express from 'express';
import { Task } from '../models/taskModel.js';

const router = express.Router();

// Route for Saving a new Task
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.description ||
      !request.body.dueDate ||
      !request.body.status ||
      !request.body.priority
    ) {
      return response.status(400).send({
        message: 'Send all required fields: description, dueDate, status, priority',
      });
    }
    const newTask = {
      description: request.body.description,
      dueDate: request.body.dueDate,
      status: request.body.status,
      priority: request.body.priority,
    };

    const task = await Task.create(newTask);

    return response.status(201).send(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting All Tasks from the database
router.get('/', async (request, response) => {
  try {
    const tasks = await Task.find({});

    return response.status(200).json({
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting One Task from the database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findById(id);

    if (!task) {
      return response.status(404).json({ message: 'Task not found' });
    }

    return response.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Updating a Task
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.description ||
      !request.body.dueDate ||
      !request.body.status ||
      !request.body.priority
    ) {
      return response.status(400).send({
        message: 'Send all required fields: description, dueDate, status, priority',
      });
    }

    const { id } = request.params;

    const result = await Task.findByIdAndUpdate(id, request.body, { new: true });

    if (!result) {
      return response.status(404).json({ message: 'Task not found' });
    }

    return response.status(200).send({ message: 'Task updated successfully', data: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Deleting a Task
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Task.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Task not found' });
    }

    return response.status(200).send({ message: 'Task deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
