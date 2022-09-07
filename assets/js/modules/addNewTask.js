import { getData, setData, showTools } from '../libs/utilities.js'
import { showTask } from '../libs/showTask.js'
import { updateTask } from './updateTask.js'
import { removeTask } from './removeTask.js'
import { completeTask } from './completeTask.js'

const addNewTask = (event) => {
	event.preventDefault()

	const newTaskForm = document.querySelector('.tasks-form')
	const newTaskInput = document.querySelector('.tasks-form__input')

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

	const taskElement = showTask(task)
	const buttonMore = taskElement.querySelector('.tasks-list__button[data-role=more]')
	const buttonEdit = taskElement.querySelector('.tasks-list__button[data-role=edit]')
	const buttonDelete = taskElement.querySelector('.tasks-list__button[data-role=delete]')
	const labelCheckbox = taskElement.querySelector('.tasks-list__status')

	showTools(buttonMore)
	updateTask(buttonEdit)
	removeTask(buttonDelete)
	completeTask(labelCheckbox)
}

export { addNewTask }
