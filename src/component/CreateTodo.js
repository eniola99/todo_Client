import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'


const CreateTodo = () => {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            description: '',
        },
        validationSchema: Yup.object({
            description: Yup.string().required('Required'),
        }),

        onSubmit: async (values) => {
            try {
                await axios.post(`https://qudustodo.herokuapp.com/todo/register`, values)
                navigate("/")
            } catch (err) {
                
             }

        }
    })
    return (
        <div className='container'>
        <Typography.Title level={3} style={{textAlign: 'center', padding: 30, margin: 20}}>Create todo</Typography.Title>
        <form onSubmit={formik.handleSubmit} className='form-style'>
           
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}/>
            {formik.touched.description && formik.errors.description ? (<div className='required'>{formik.errors.description}</div>) : null}
            
            <div>
            <button type='submit' >Register task</button>
            </div>
        </form>
        </div>
    )
}

export default CreateTodo
