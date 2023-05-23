import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteCategory} from './store';

const Categories = ()=> {
  const { categories, todos } = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteFunc = async(category) => {
    console.log(todos[0]);
    if(todos.find((todo)=> todo.categoryId == category.id) !== undefined){
      alert('Cannot delete todos with catergories');
      return;
    } else {
      await dispatch(deleteCategory(category));
    }
  }

  return (
    <ul>
      {
        categories.map( category => {
          const filtered = todos.filter(todo => todo.categoryId === category.id);
          return (
            <li key={ category.id }>
            <Link to={`/categories/${category.id}`}>{ category.name }</Link>
              ({ filtered.length })
              <button onClick={()=>{deleteFunc(category)}}>Delete</button>  
            </li>
          );
        })
      }
    </ul>
  );
};

export default Categories;
