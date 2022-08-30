import { getData } from "../libs/utilities.js"
import { showTask } from "../libs/showTask.js"
import { updateTask } from "./updateTask.js"

const newTaskForm = document.querySelector('.tasks-form')
const newTaskInput = document.querySelector('.tasks-form__input')
const tasksList = document.querySelector('.tasks-list')

const addNewTask = (event) => {
	event.preventDefault()

	const formData = new FormData(newTaskForm)

	const newTask = {
		text: formData.get('task'),
		completed: false
	}

	const listOfTasks = getData()
	const listOfTasksCopy = listOfTasks.slice()

	listOfTasksCopy.push(newTask)

	const id = listOfTasksCopy.length - 1

	newTask['id'] = 'task-' + id
	showTask(newTask, tasksList)

	localStorage.setItem('tasks', JSON.stringify(listOfTasksCopy))
	newTaskForm.reset()
	newTaskInput.select()

	const tasksListButtons = document.querySelectorAll('.tasks-list__button')
	tasksListButtons.forEach((button) => updateTask(button))
}

export { addNewTask }
