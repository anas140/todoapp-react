import React from 'react'

const Todos = ({todos, deleteTodo}) => {
	const todoList = todos.length ? (
			todos.map(todo => {
				return(
					<li className="collection-item" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
						<span>{todo.content}</span>
					</li>
				);
			})
		) : (
		<p className="center red-text">No Todos Found</p>	
	);
	return (
		<ul className="collection">
			{todoList}
		</ul>
	)
}

export default Todos;