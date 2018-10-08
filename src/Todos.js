import React from 'react'
import './Todos.css'

const Todos = ({todos, deleteTodo}) => {
	const todoList = todos.length ? (
			todos.map(todo => {
				return(
					<li className="collection-item" key={todo.id} >
						<span>
						{todo.content}
						 <i className="material-icons right delete red-text" onClick={() => {deleteTodo(todo.id)}}>
						 		delete_forever
				 			</i>
						</span>
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