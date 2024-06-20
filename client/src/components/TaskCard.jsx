import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {

  const navigate = useNavigate();

  return (
    <div 
      style={{backgroundColor: "#101010"}}
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  )
}
