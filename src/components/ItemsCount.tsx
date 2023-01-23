import styles from './ItemsCount.module.css'

interface CountProps {
  countType: string,
  todoItems: Array<{
    content: string,
    checked: boolean,
  }>
}

export function ItemsCount(props: CountProps) {

  const completedItems = props.todoItems.filter((item)=>{return item.checked == true})

  console.log(props.todoItems);
  

  return(
    <div 
      className={props.countType === "created" ? styles.tasksCreated : styles.tasksCompleted}
    >
      {props.countType === "created" ? "Tarefas criadas" : "Concluídas"} 
      <span className={styles.tasksCount}>
      {props.countType === "created" ? props.todoItems.length : completedItems.length}
        </span>
    </div>
  )
}