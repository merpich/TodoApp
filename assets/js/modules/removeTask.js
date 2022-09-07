import { getData, setData } from '../libs/utilities.js';

const removeTask = (button) => {

	const listOfTasksElement = document.querySelector('.tasks-list')
	const form = button.parentElement.parentElement
	const formID = form.id

	const taskElement =  form.parentElement

	button.addEventListener('click', (event) => {
		event.preventDefault()

		const listOfTasks = getData()
		const listOfTasksCopy = listOfTasks.slice()

		listOfTasksCopy.forEach((task, id) => {
			if (task.id === formID) {
				taskElement.remove()

				listOfTasksCopy.splice(id, 1)				
				setData('tasks', listOfTasksCopy)

				if (listOfTasksCopy.length < 1) {
					listOfTasksElement.remove()
				}
			}
		})
	})
}

export { removeTask }
