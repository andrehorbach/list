import styles from './TodoItem.module.css';
import uncheckedMark from '../assets/unchecked.svg';
import checkedMark from '../assets/checked.svg';
import { Trash } from 'phosphor-react';
import { useState } from 'react';


interface ContentProps {
  content: string;
  checked: boolean;
  handleCheckItem: (itemToCheck: string) => void;
  handleDeleteItem: (itemToDelete: string) => void;
}

export function TodoItem(props : ContentProps) {

  const handleCheck = () => {
    props.handleCheckItem(props.content)
  }
  
  const handleDelete = () => {
    props.handleDeleteItem(props.content)
  }

  return(
    <div className={styles.todoItem}>
      <label>
        <input type="checkbox" />
          <span className="checkmark">
            {/* inserir em 'img' a validaçao do state checked */}
            <img src={props.checked ? checkedMark : uncheckedMark} onClick={handleCheck}/>
          </span>
      </label>
      <div className={styles.itemDesc}>
        <p className={props.checked ? styles.checkedItemDesc : ""}>{props.content}</p>
      </div>
      <button onClick={handleDelete}><Trash size={18} /></button>
    </div>
  )
}