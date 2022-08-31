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

const showTools = (button) => {
	const buttonTools = button.nextElementSibling

	button.addEventListener('click', (event) => {
		event.preventDefault()
		button.classList.toggle('is-active')
		buttonTools.classList.toggle('is-hidden')
	})
}

export { getData, setData, showTools }
