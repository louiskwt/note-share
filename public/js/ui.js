// Expandable list for note section
const expandBtn = document.querySelector('.expand-btn'); 

// Expand Btn event handler
expandBtn.addEventListener('click', (e) => {
    // find tha parent to get the id name
    const paperType = e.target.parentNode.parentNode.id;
    // use the id name to target the corresponding list
    if(document.getElementById(`${paperType}-list`).classList.contains('d-none')) {
        document.getElementById(`${paperType}-list`).classList.remove('d-none');
    } else {
        document.getElementById(`${paperType}-list`).classList.add('d-none');
    }
})