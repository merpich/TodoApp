import { getData } from "../libs/utilities.js"
import { showTask } from "../libs/showTask.js"

const newTaskForm = document.querySelector('.tasks-form')
const newTaskInput = document.querySelector('.tasks-form__input')
const tasksList = document.querySelector('.tasks-list')

const addNewTask = (event) => {
	event.preventDefault()
	
	const formData = new FormData(newTaskForm)
	const newTask = formData.get('task')
	const listOfTasks = getData()
	const listOfTasksCopy = listOfTasks.slice()

	listOfTasksCopy.push(newTask)

	const id = listOfTasksCopy.length - 1
	const task = listOfTasksCopy[id]

	showTask(task, id, tasksList)

	localStorage.setItem('tasks', JSON.stringify(listOfTasksCopy))
	newTaskForm.reset()
	newTaskInput.select()
}

export { addNewTask }
