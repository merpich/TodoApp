import { showTask } from "./libs/showTask.js"
import { getData } from "./libs/utilities.js"
import { addNewTask } from "./modules/addNewTask.js"

const newTaskForm = document.querySelector('.tasks-form')
const tasksList = document.querySelector('.tasks-list')

try {
	const listOfTasks = getData()

	listOfTasks.forEach((task) => showTask(task, tasksList))
	newTaskForm.addEventListener('submit', (event) => addNewTask(event))
} catch(error) {
	console.log(error)
}
