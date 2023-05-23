import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {updateCategory} from './store';

const UpdateCategory = () => {
    const {id} = useParams();
    const category = useSelector(state=>state.categories).find(category=>category.id== id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if(!category){
        //error handle here
        return null;
    }

    const update = async(ev) =>{
        ev.preventDefault();
        const updatedCategory = {...category};
        updatedCategory.name = ev.target.name.value;
        await dispatch(updateCategory(updatedCategory));
        navigate('/');
    }

    return(
        <form onSubmit={update}>
            <input name='name' defaultValue={category.name} required/>
            <input type='submit' value='Update'/>
        </form>
    )
}

export default UpdateCategory;