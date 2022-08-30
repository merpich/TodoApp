const updateTaskForm = (input, button, status) => {
	button.setAttribute('data-status', status)
	button.innerHTML = 
		`<svg class="tasks-list__icon tasks-list__icon_${status}">
			<use xlink:href="./assets/icons/sprites.svg#${status}"></use>
		</svg>`

	if (status === 'save') {
		input.removeAttribute('disabled')
		input.focus()
	}

	if (status === 'edit') {
		input.setAttribute('disabled', 'disabled')
	}
}

export { updateTaskForm }
