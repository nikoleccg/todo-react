function TodoItem({text, completed}){
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-checked--active"}`}>V</span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
        {text}
        </p>
      <span className="Icon Icon-delete">x</span>
    </li>
  )
}

export { TodoItem }