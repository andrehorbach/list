import styles from './NewItemForm.module.css'
import plusBtn from '../assets/plus-btn.svg'
import { ChangeEvent, InvalidEvent, FormEvent, useState } from 'react'

interface ItemsProps {
  addItem: (itemToAdd: {
    content: string,
    checked: boolean,
  }) => void,
}

export function NewItemForm(props: ItemsProps) {

  const [newItemText, setNewItemText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {

    event.target.setCustomValidity('')
    setNewItemText(event.target.value)
    
  };

  const handleInvalidItem = (event: InvalidEvent<HTMLTextAreaElement>) => {

    event.target.setCustomValidity("Este campo é obrigatório")

}

  const handleAddItem = (event: FormEvent) => {

    event.preventDefault();
    props.addItem({content: newItemText, checked: false});
    console.log(event);
    
   //add item no vetor
    
  }

  return(
    <div>
      <form 
        className={styles.newItemForm}
        onSubmit={handleAddItem}
      >
        <textarea 
          name="New Item"
          placeholder="Adicione uma nova tarefa"
          onChange={handleChange}
          onInvalid={handleInvalidItem}
          value={newItemText}
          required
        >
        </textarea>
        <button>
          Criar 
          <img 
            className={styles.btnImg} 
            src={plusBtn}/>
        </button>
      </form>
    </div>
  )
}