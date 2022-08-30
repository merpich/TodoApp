const showTask = (task,  listOfTasks) => {
	const taskElement = document.createElement('li')

	taskElement.classList.add('tasks-list__item')
	taskElement.innerHTML = 
		`<form class="tasks-list__form" action="#" id="${task.id}">
			<label class="tasks-list__status">
				<input type="checkbox">
				<svg class="tasks-list__checkbox">
					<use xlink:href="./assets/icons/sprites.svg#check"></use>
				</svg>
			</label>
			<input class="tasks-list__input" type="text" name="task" value="${task.text}" data-status="${task.completed}" disabled>
			<button class="tasks-list__button" type="submit" data-status="edit">
				<svg class="tasks-list__icon tasks-list__icon_edit">
					<use xlink:href="./assets/icons/sprites.svg#edit"></use>
				</svg>
			</button>
		</form>`

	listOfTasks.append(taskElement)
}

export { showTask }
