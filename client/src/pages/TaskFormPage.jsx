import { useForm } from 'react-hook-form';
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "react-hot-toast";

export const TaskFormPage = () => {

  const { 
    register, 
    handleSubmit,
    formState:{
      errors,
    },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const onSubmit = handleSubmit(async data => {

    if (params.id) {
      await updateTask(params.id, data);
      toast.success('Tarea Actualizada', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#ffffff",
        }
      });
    } else {
      await createTask(data);
      toast.success('Tarea creada', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#ffffff",
        }
      });
    }

    navigate('/tasks');
  }); 

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue('title', data.title);
        setValue('description', data.description);
      }
    }
    loadTask();
  }, []);
  
  return (
    <div>
      <form onSubmit={ onSubmit }>

        <input 
          type="text" 
          placeholder="Title"
          {...register("title", {required: true})}
        />

        {errors.title && <span>this field is required</span>}

        <textarea 
          placeholder="Description"
          rows="3"
          {...register("description", {required: true})}
        ></textarea>

        {errors.title && <span>this field is required</span>}

        <button>Save</button>

      </form>

      {
        params.id && (
          <button
            onClick={async () => {
              const accepted = window.confirm('are you sure?')
              if(accepted) {
                await deleteTask(params.id);
                toast.success('Tarea eliminada', {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#ffffff",
                  }
                });
                navigate('/tasks/');
              }
            }}
          >Delete</button>
        )
      }

    </div>
  )
}
