import { showTask } from "./showTask.js"

const getData = () => {
	let listOfTasks = []

	if (JSON.parse(localStorage.getItem('tasks')) !== null) {
		listOfTasks = JSON.parse(localStorage.getItem('tasks'))
		listOfTasks = Object.values(listOfTasks)
	}

	return listOfTasks
}

const addNewTask = (formData, tasksList) => {
	const newTask = formData.get('task')
	const listOfTasks = getData()
	const listOfTasksCopy = listOfTasks.slice()

	showTask(newTask, tasksList)

	listOfTasksCopy.push(newTask)
	localStorage.setItem('tasks', JSON.stringify(listOfTasksCopy))
}

export { getData, addNewTask }
