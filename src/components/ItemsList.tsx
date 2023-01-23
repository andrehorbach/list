import styles from './ItemsList.module.css';
import { ItemsCount } from './ItemsCount';
import { TodoItem } from './TodoItem';
import clipboard from '../assets/clipboard.svg'

interface ItemsProps {
  todoItems: Array<{
    content: string,
    checked: boolean,
  }>,
  checkItem: (itemToCheck: string) => void,
  deleteItem: (itemToDelete: string) => void,
}


export function ItemsList(props: ItemsProps) {

  console.log(props.todoItems);

  return(
    <div className={styles.itemsList}>
      <header>
        <ItemsCount 
          countType={"created"}
          todoItems={props.todoItems}
        />
        <ItemsCount 
          countType={"completed"}
          todoItems={props.todoItems}
        />
      </header>
      {props.todoItems.map(todoItem => {
        return <TodoItem 
                key={todoItem.content}
                content={todoItem.content}
                checked={todoItem.checked}
                handleCheckItem={props.checkItem}
                handleDeleteItem={props.deleteItem}
               />
      })}
      <div className={styles.emptyList}>
        <div>
          <img src={clipboard} />
        </div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
        
    </div>
  )
}