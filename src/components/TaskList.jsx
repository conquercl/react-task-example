import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <div>
        <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
      </div>
    );
  } else {
    return (
      <div className='grid grid-cols-4 gap-2 '>
        {tasks.map((tasks) => (
          <div key={tasks.id}>
            <TaskCard key={tasks.id} task={tasks} />
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
