const express = require('express');
const app = express();
const taskRouter = require('./router/tasksRouter')
const userRouter = require('./router/usersRouter')
app.use(express.json())


/*
//Get All Tasks
app.get('/tasks', getAllTasks)

//Get Once Task
app.get('/tasks/:id', getOneTask)

//Delete Task
app.delete('/tasks/:id', deleteTask)

//Create Task
app.post('/task', createTask)

//Update Task
app.put('/tasks/:id', updateTask)
*/


//Tasks Router
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/tasks/:id', taskRouter);

//Users Router
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users/:id', userRouter);


module.exports = app;