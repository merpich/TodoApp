import { getData, setData } from '../libs/utilities.js'

const completeTask = (label) => {

	const form = label.parentElement
	const checkbox = label.querySelector('input');
	const inputTask = label.nextElementSibling
	const formId = form.id

	const listOfTasks = getData()
	const listOfTasksCopy = listOfTasks

	checkbox.addEventListener('change', () => {
		const status = checkbox.checked

		if (status) {
			listOfTasks.forEach((task, id) => {
				if (task.id === formId) {
					task.completed = status

					listOfTasksCopy[id] = task
					setData('tasks', listOfTasksCopy)
				}
			})
			inputTask.setAttribute('data-completed', true)
		} else {
			listOfTasks.forEach((task, id) => {
				if (task.id === formId) {
					task.completed = status

					listOfTasksCopy[id] = task
					setData('tasks', listOfTasksCopy)
				}
			})
			inputTask.setAttribute('data-completed', false)
		}
	})
}

export { completeTask }
