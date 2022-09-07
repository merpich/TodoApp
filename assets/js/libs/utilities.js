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
	const buttonIcon = button.querySelector('.tasks-list__icon')
	const buttonUse = button.querySelector('use')
	const body = document.body

	body.addEventListener('click', (event) => {
		if (event.target === button || event.target === buttonIcon || event.target === buttonUse) {
			if (buttonTools.classList.contains('is-hidden')) {
				button.classList.add('is-active')
				buttonTools.classList.remove('is-hidden')
			} else {
				button.classList.remove('is-active')
				buttonTools.classList.add('is-hidden')
			}
		} else if (event.target != buttonTools) {
			button.classList.remove('is-active')
			buttonTools.classList.add('is-hidden')
		}
	})
}

export { getData, setData, showTools }
