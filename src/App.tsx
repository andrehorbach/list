import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header'
import { NewItemForm } from './components/NewItemForm';
import { ItemsList } from './components/ItemsList';
import { useState, FormEvent } from 'react';

function App() {

  const ItemsArray = [{content: "Tarefa a completar 1", checked: false}, {content: "Tarefa a completar 2", checked: false}, {content: "Tarefa a completar 3", checked: false}]
  const [todoItems, setTodoItems] = useState(ItemsArray)
  const [checkedItem, setCheckedItem] = useState(false);
 
  console.log(ItemsArray);
  

  const checkItem = (itemToCheck: string) => {

    const checkTodoItems = todoItems.map(item => { 
      if (item.content === itemToCheck) {
        item.checked = !item.checked
        return item
      } 
      return item
    })
    
    setTodoItems(checkTodoItems);

  };

  const deleteItem = (itemToDelete: string) => {
      
    const updatedTodoItems = todoItems.filter(item => { return item.content !== itemToDelete})

    setTodoItems(updatedTodoItems);

  };

  const addItem = (itemToAdd: {content: string, checked: boolean}) => {
    
    const updatedTodoItems = [...todoItems, itemToAdd]
    console.log(updatedTodoItems);
    setTodoItems(updatedTodoItems);
    
  };

  return(
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewItemForm 
          addItem={addItem}
        />
        <ItemsList 
          checkItem={checkItem}
          deleteItem={deleteItem}
          todoItems={todoItems}
        />
      </div>
    </>
  )
}

export default App;