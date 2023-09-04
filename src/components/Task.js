import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa"

const Task = ({task, index, deleteTask, getSingleTask, setToComplete}) => {
    return (
        <div className={task.completed ? "task completed" : "task"}>
            <p>{index + 1}. </p>
            {task.name}
            <div className="task-icons">
                <FaCheckDouble color="green" onClick={() => {
                    setToComplete(task);
                }}/>
                <FaEdit color="purple" onClick={() => {
                    getSingleTask(task);
                }}/>
                <FaRegTrashAlt color="red" onClick={() => {
                    deleteTask(task._id);
                }}/>
            </div>
        </div>
    )
}

export default Task