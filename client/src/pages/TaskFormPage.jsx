import { useForm } from 'react-hook-form';
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
    } else {
      await createTask(data);
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
                navigate('/tasks/');
              }
            }}
          >Delete</button>
        )
      }

    </div>
  )
}
