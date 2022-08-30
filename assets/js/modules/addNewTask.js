import { getData, setData } from "../libs/utilities.js"
import { showTask } from "../libs/showTask.js"
import { updateTask } from "./updateTask.js"

import {
	newTaskFormElement,
	newTaskInputElement,
	listOfTasksElement
} from "../libs/elements.js"

const addNewTask = (event) => {
	event.preventDefault()

	const formData = new FormData(newTaskFormElement)
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

	newTaskFormElement.reset()
	newTaskInputElement.select()

	const taskElement = showTask(task, listOfTasksElement)
	const button = taskElement.querySelector('.tasks-list__button')

	updateTask(button)
}

export { addNewTask }
