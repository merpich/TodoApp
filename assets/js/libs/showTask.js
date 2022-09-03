const showTask = (task,  listOfTasksElement) => {
	const taskElement = document.createElement('li')

	let checked = ''
	if (task.completed) {
		checked = 'checked'
	}

	taskElement.classList.add('tasks-list__item')
	taskElement.innerHTML = 
		`<form class="tasks-list__form" action="#" id="${task.id}">
			<label class="tasks-list__status">
				<input type="checkbox" ${checked}>
				<svg class="tasks-list__checkbox">
					<use xlink:href="./assets/icons/sprites.svg#save"></use>
				</svg>
			</label>
			<input class="tasks-list__input" type="text" name="task" value="${task.text}" data-completed="${task.completed}" disabled>
			<button class="tasks-list__button" type="button" data-role="more">
				<svg class="tasks-list__icon tasks-list__icon_more">
					<use xlink:href="./assets/icons/sprites.svg#more"></use>
				</svg>
			</button>

			<div class="tasks-list__tools is-hidden">
				<button class="tasks-list__button" data-role="edit">
					<svg class="tasks-list__icon tasks-list__icon_edit">
						<use xlink:href="./assets/icons/sprites.svg#edit"></use>
					</svg>
					<span class="tasks-list__tool">Редактировать</span>
				</button>
				<button class="tasks-list__button" data-role="delete">
					<svg class="tasks-list__icon tasks-list__icon_delete">
						<use xlink:href="./assets/icons/sprites.svg#delete"></use>
					</svg>
					<span class="tasks-list__tool">Удалить</span>
				</button>
			</div>
		</form>`

	listOfTasksElement.append(taskElement)
	listOfTasksElement.style.display = 'block'

	return taskElement
}

export { showTask }
