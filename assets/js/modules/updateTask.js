import { getData } from "../libs/utilities.js"

const updateTask = (button) => {

	const input = button.previousElementSibling
	const form = button.parentElement
	const formId = form.id

	const listOfTasks = getData()
	const listOfTasksCopy = listOfTasks.slice()

	button.addEventListener('click', (event) => {
		event.preventDefault()

		if (button.getAttribute('data-status') === 'edit') {
			button.setAttribute('data-status', 'save')
			button.innerHTML = 
				`<svg class="tasks-list__icon tasks-list__icon_save">
				<use xlink:href="./assets/icons/sprites.svg#check"></use>
				</svg>`

			input.removeAttribute('disabled')
			input.focus()
		} else {
			const formData = new FormData(form)
			const formTask = formData.get('task')

			button.setAttribute('data-status', 'edit')
			button.innerHTML = 
				`<svg class="tasks-list__icon tasks-list__icon_edit">
					<use xlink:href="./assets/icons/sprites.svg#edit"></use>
				</svg>`

			input.setAttribute('disabled', 'disabled')

			listOfTasksCopy.forEach((task, id) => {
				if (task.id === formId) {
					task.text = formTask
					listOfTasksCopy[id] = task
					localStorage.setItem('tasks', JSON.stringify(listOfTasksCopy))
				}
			})
		}
	})
}

export { updateTask }
