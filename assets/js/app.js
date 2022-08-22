import { showTask } from "./modules/showTask.js"
import { getData, addNewTask } from "./modules/utilities.js"

const newTaskForm = document.querySelector('.tasks-form')
const newTaskInput = document.querySelector('.tasks-form__input')
const tasksList = document.querySelector('.tasks-list')

try {
	const listOfTasks = getData()

	listOfTasks.forEach((task) => showTask(task, tasksList))
	newTaskForm.addEventListener('submit', (event) => {
		event.preventDefault()
		const formData = new FormData(newTaskForm)
		
		addNewTask(formData, tasksList)
		newTaskForm.reset()
		newTaskInput.select()
	})
} catch(error) {
	console.log(error)
}
