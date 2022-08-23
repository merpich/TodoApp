const showTask = (task,  listOfTasks) => {
	const taskElement = document.createElement('li')
	// const nameInpit = 'task-' + id

	taskElement.classList.add('tasks-list__item')
	taskElement.innerHTML = 
		`<form class="tasks-list__form" action="#">
			<label class="tasks-list__status">
				<input type="checkbox">
				<svg class="tasks-list__checkbox">
					<use xlink:href="./assets/icons/sprites.svg#check"></use>
				</svg>
			</label>
			<input class="tasks-list__input" type="text" name="${task.id}" value="${task.text}" data-status="${task.completed}" disabled>
			<button class="tasks-list__button" type="button">
				<svg class="tasks-list__icon tasks-list__icon_edit">
					<use xlink:href="./assets/icons/sprites.svg#edit"></use>
				</svg>
			</button>
		</form>`

	listOfTasks.append(taskElement)
}

export { showTask }
