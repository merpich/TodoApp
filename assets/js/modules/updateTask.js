import { getData, setData } from "../libs/utilities.js"
import { updateTaskForm } from "../libs/updateTaskForm.js"

const updateTask = (button) => {

	const buttonTools = button.parentElement
	const buttonMore = buttonTools.previousElementSibling

	const form = button.parentElement.parentElement
	const formId = form.id
	const input = form.querySelector('.tasks-list__input')

	
	button.addEventListener('click', (event) => {
		event.preventDefault()

		if (button.getAttribute('data-role') === 'edit') {
			buttonTools.classList.add('is-hidden')
			buttonMore.classList.remove('is-active')

			updateTaskForm(input, button, 'save', 'Сохранить')
		} else {
			const listOfTasks = getData()
			const listOfTasksCopy = listOfTasks.slice()

			const formData = new FormData(form)
			const formTask = formData.get('task')

			listOfTasksCopy.forEach((task, id) => {
				if (task.id === formId) {
					task.text = formTask
					listOfTasksCopy[id] = task
					setData('tasks', listOfTasksCopy)
				}
			})

			updateTaskForm(input, button, 'edit', 'Редактировать')
		}
	})
}

export { updateTask }
