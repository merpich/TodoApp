import { getData, setData, showTools } from "../libs/utilities.js"
import { showTask } from "../libs/showTask.js"
import { updateTask } from "./updateTask.js"

import {
	newTaskForm,
	newTaskInput,
	listOfTasksElement
} from "../libs/elements.js"

const addNewTask = (event) => {
	event.preventDefault()

	const formData = new FormData(newTaskForm)
	const listOfTasks = getData()
	const listOfTasksCopy = listOfTasks.slice()
	const taskId = 'task-' + listOfTasksCopy.length

	const task = {
		id: taskId,
		text: formData.get('task'),
		completed: false
	}

	listOfTasksCopy.push(task)
	setData('tasks', listOfTasksCopy)

	newTaskForm.reset()
	newTaskInput.select()

	const taskElement = showTask(task, listOfTasksElement)
	const buttonMore = taskElement.querySelector('.tasks-list__button[data-role=more]')
	const buttonEdit = taskElement.querySelector('.tasks-list__button[data-role=edit]')

	showTools(buttonMore)
	updateTask(buttonEdit)
}

export { addNewTask }
