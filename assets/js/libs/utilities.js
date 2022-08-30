const getData = () => {
	let listOfTasks = []

	if (JSON.parse(localStorage.getItem('tasks')) !== null) {
		listOfTasks = JSON.parse(localStorage.getItem('tasks'))
		listOfTasks = Object.values(listOfTasks)
	}

	return listOfTasks
}

const setData = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data))
}

export { getData, setData }
