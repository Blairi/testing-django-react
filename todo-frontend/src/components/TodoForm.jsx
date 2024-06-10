import { useFormik } from 'formik';
import { Button, DatePicker, Input } from "@nextui-org/react"
import { getLocalTimeZone, today } from '@internationalized/date';

export const TodoForm = () => {

  const formik = useFormik({
    initialValues: {
      desc: 'xd',
      date: today(getLocalTimeZone()),
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
        onChange={(date) => formik.setFieldValue('date', date)}
        value={formik.values.date}
      />
      <div className="flex justify-end">
        <Button color="primary" type='submit'>
          Save
        </Button>
      </div >
    </form>
  )
}
