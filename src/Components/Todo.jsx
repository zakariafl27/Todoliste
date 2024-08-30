import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export default function Todo() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");


    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const Add = () => {
        if (task.length > 0) {
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    const Delete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    const Edit = (index) => {
        const newTask = prompt("Edit the Task:", task[index]);
        if (newTask !== null && newTask.trim()) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='text-center'>
            <form onSubmit={e => e.preventDefault()}>
                <h1 className='border-bottom border-3 border-dark' >Todo List</h1>
                <div className='d-flex justify-content-center'>
                    <input type='text' className="form-control border-3 border-dark m-2 w-25" name='task' value={task} placeholder='task' onChange={e => handleChange(e)} />
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => Add()} >Add Task</button>
                </div>
                <div className='container m-4'>
                    <div className='row row-cols-3'>
                        {
                            tasks.map((t, index) => (
                                <div key={index} className='col border border rounded-3 border-danger border-4 card-body mb-3 mx-2 w-25'>
                                    <h5 className='card-title border-bottom mb-2 border-dark border-2'>{t}</h5> 
                                    <button className='btn btn-danger m-2' onClick={() => Delete(index)}>Delete</button>
                                    <button className='btn btn-success m-2' onClick={() => Edit(index)}>Edit</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}