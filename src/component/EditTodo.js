import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Typography } from 'antd'

const EditTodo = () => {

    const formik = useFormik({
        initialValues: {
            newTask: " ", description: " ",
        },
        validationSchema: Yup.object({
            newTask: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
        }),

        onSubmit: async (values) => {
            try {
                await axios.post(`https://qudustodo.herokuapp.com/todo/${id}`, values)
            } catch (err) {
                
             }
        }
    })

    return (
        <div className='container'>
        <Typography.Title level={3} style={{textAlign: 'center', padding: 30, margin: 20}}>Create todo</Typography.Title>
        <form onSubmit={formik.handleSubmit} className='form-style'>
            <label htmlFor='firstName'>New task</label>
            <input type='text' name='newTask' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newTask}/>
            {formik.touched.newTask && formik.errors.newTask ? (<div className='required'>{formik.errors.newTask}</div>) : null}

            <label htmlFor='description'>Description</label>
            <input type='text' name='description' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}/>
            {formik.touched.description && formik.errors.description ? (<div className='required'>{formik.errors.description}</div>) : null}
            
            <div>
            <button type='submit' >Update task</button>
            </div>
        </form>
        </div>
    )
}

export default EditTodo