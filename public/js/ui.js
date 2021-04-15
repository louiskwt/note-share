// Expandable list for note section
const expandBtnArr = Array.from(document.querySelectorAll('.expand-btn'));

// Expand Btn event handler
expandBtnArr.forEach((expandBtn) => {
	expandBtn.addEventListener('click', (e) => {
		expand(e);
	});
});

// function for expanding note section
function expand(e) {
	// find tha parent to get the id name
	const paperType = target.parentNode.parentNode.id;

	// use the id name to target the corresponding list
	if (
		document
			.getElementById(`${paperType}-list`)
			.classList.contains('d-none')
	) {
		document.getElementById(`${paperType}-list`).classList.remove('d-none');
	} else {
		document.getElementById(`${paperType}-list`).classList.add('d-none');
	}
}
