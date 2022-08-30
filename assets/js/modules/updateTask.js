import { getData, setData, updateTaskForm } from "../libs/utilities.js"

const updateTask = (button) => {

	const input = button.previousElementSibling
	const form = button.parentElement
	const formId = form.id

	button.addEventListener('click', (event) => {
		event.preventDefault()

		if (button.getAttribute('data-status') === 'edit') {
			updateTaskForm(input, button, 'save')
		} else {
			const listOfTasks = getData()
			const listOfTasksCopy = listOfTasks.slice()

			const formData = new FormData(form)
			const formTask = formData.get('task')

			console.log(formTask)

			listOfTasksCopy.forEach((task, id) => {
				if (task.id === formId) {
					task.text = formTask
					listOfTasksCopy[id] = task
					setData('tasks', listOfTasksCopy)
				}
			})

			updateTaskForm(input, button, 'edit')
		}
	})
}

export { updateTask }
