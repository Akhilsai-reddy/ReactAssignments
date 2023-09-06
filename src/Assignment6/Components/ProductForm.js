import { Formik,Form, Field, ErrorMessage} from "formik"
import { nanoid } from "nanoid"
import * as yup from 'yup'
const ProductForm=(props)=>(
    <div>
    <h1>Add Product</h1>
    <Formik
    
    initialValues={{
        id:nanoid(),
        Product_Name:'',
      Quantity: '',
      Price: ''
    }}

    validationSchema={
   yup.object().shape({
   Product_Name:yup.string().required(),
   Quantity:yup.number().required(),
   Price:yup.number().required()
      })
    }
    onSubmit={
        (values)=>{
          props.onSubmit(values)
        }
    }
    >
        <Form>

           <label>Product_Name:
           <Field type='text' name='Product_Name' placeholder='Enter Product name'/>
           <span style={{color:'red'}}><ErrorMessage name="Product_Name"/></span>
           <br/>
           </label>
           <label>Quantity:
           <Field type='number' name='Quantity' placeholder='Enter Quantity' min='1'/>
           <span style={{color:'red'}}><ErrorMessage name="Quantity"/></span><br/>
           </label>
           <label>Price:
           <Field type='number' name='Price' placeholder='Enter Price' min='100'/>
           <span style={{color:'red'}}><ErrorMessage name="Price"/></span><br/>
           </label>
           <button type='submit'>Submit</button>
        </Form>
    </Formik>
    
    </div>
)

export default ProductForm