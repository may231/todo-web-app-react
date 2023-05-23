import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCategory } from './store';


const CreateCategory = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const create = async(ev) =>{
        ev.preventDefault();
        const newCategory = {
            name: ev.target.name.value,
        }
        const response = await dispatch(createCategory(newCategory));
        if(!response.error){
            navigate('/');
          }
          else {
            setError(response.payload);
          }
    }

    return(
        <form onSubmit={ create }>
      {
        Object.keys(error).length ? (
          <pre className='error'>
            { JSON.stringify(error, null, 2) }
          </pre>
        ): (null)
      }
      <label>Category Name: </label>
      <input name='name' required/>
      <button>Create</button>
    </form>
  );
}

export default CreateCategory;