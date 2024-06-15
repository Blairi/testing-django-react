import { useFormik } from 'formik';
import { Button, DatePicker, Input } from "@nextui-org/react"
import { getLocalTimeZone, today, parseDate } from '@internationalized/date';
import { saveTodo } from '../service';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const defaultValues = {
  id: Math.floor(Math.random() * (10000 - 1 + 1)) + 1,
  desc: '',
  date: today(getLocalTimeZone()).toString(),
  done: false,
}

export const TodoForm = ({ initialValues = defaultValues, onSave = () => {} }) => {

  const { todos, setTodos } = useContext( TodoContext );

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {

      // local storage
      saveTodo(values);

      // react state
      setTodos([
        ...todos.filter(todoItem => todoItem.id != values.id),
        values
      ]);

      formik.resetForm();
      onSave();
    },
  });

  return (
    <form 
      className="space-y-3"
      onSubmit={formik.handleSubmit}
    >
      <Input 
        type="text" 
        isRequired 
        label="Description" 
        placeholder="Enter TODO's description" 
        value={formik.values.desc}
        name='desc'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete='off'
      />
      <DatePicker 
        label="Date" 
        name='date'
        onBlur={formik.handleBlur}
        onChange={(date) => formik.setFieldValue('date', date.toString())}
        value={ parseDate(formik.values.date) }
      />
      <div className="flex justify-end">
        <Button color="primary" type='submit'>
          Save
        </Button>
      </div >
    </form>
  )
}
