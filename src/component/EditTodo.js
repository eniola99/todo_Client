import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const EditTodo = () => {

    const navigate = useNavigate()

    let { id } = useParams()
    const formik = useFormik({
        initialValues: {
            description: " ",
        },
        validationSchema: Yup.object({
            newTask: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
        }),

        onSubmit: async (values) => {
            try {
                await axios.put(`https://qudustodo.herokuapp.com/todo/${id}`, values)
                navigate("/")
            } catch (err) {
                
             }
        }
    })

    return (
        <div className='container'>
        <Typography.Title level={3} style={{textAlign: 'center', padding: 30, margin: 20}}>This is Edit todo</Typography.Title>
        <form onSubmit={formik.handleSubmit} className='form-style'>
          
            <label htmlFor='description'>Description {id}</label>
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