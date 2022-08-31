import { showTask } from "./libs/showTask.js"
import { getData, showTools } from "./libs/utilities.js"
import {
	newTaskForm,
	listOfTasksElement,
} from "./libs/elements.js"

import { addNewTask } from "./modules/addNewTask.js"
import { updateTask } from "./modules/updateTask.js"

try {

	const listOfTasks = getData()
	listOfTasks.forEach((task) => showTask(task, listOfTasksElement))

	const buttonsMore = document.querySelectorAll('.tasks-list__button[data-role=more]')
	const buttonsEdit = document.querySelectorAll('.tasks-list__button[data-role=edit]')
	buttonsMore.forEach((button) => showTools(button))
	buttonsEdit.forEach((button) => updateTask(button))

	newTaskForm.addEventListener('submit', (event) => addNewTask(event))

} catch(error) {
	console.log(error)
}
