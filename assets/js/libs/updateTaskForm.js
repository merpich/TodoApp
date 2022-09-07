const updateTaskForm = (input, button, role, text) => {
	button.setAttribute('data-role', role)
	button.innerHTML =
		`<svg class="tasks-list__icon tasks-list__icon_${role}">
			<use xlink:href="./assets/icons/sprites.svg#${role}"></use>
		</svg>
		<span class="tasks-list__tool">${text}</span>`

	if (role === 'save') {
		input.removeAttribute('disabled')
		input.focus()
	}

	if (role === 'edit') {
		input.setAttribute('disabled', 'disabled')
	}
}

export { updateTaskForm }
