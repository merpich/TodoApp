import { showTask } from "./libs/showTask.js"
import { getData } from "./libs/utilities.js"
import {
	newTaskFormElement,
	listOfTasksElement
} from "./libs/elements.js"

import { addNewTask } from "./modules/addNewTask.js"
import { updateTask } from "./modules/updateTask.js"

try {

	const listOfTasks = getData()
	listOfTasks.forEach((task) => showTask(task, listOfTasksElement))

	const tasksListButtons = document.querySelectorAll('.tasks-list__button')
	tasksListButtons.forEach((button) => updateTask(button))

	newTaskFormElement.addEventListener('submit', (event) => addNewTask(event))

} catch(error) {
	console.log(error)
}
