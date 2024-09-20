// store to the popup form and overlay
const popupForm = document.getElementById('popupForm');
const overlay = document.getElementById('overlay');
const showFormButton = document.getElementById('showFormButton');
const userForm = document.getElementById('userForm');
const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

// Show the popup form
showFormButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
    overlay.style.display = 'block';
});

// Hide the popup
userForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    // Create a new row in the table
    const newRow = userTable.insertRow();
    newRow.insertCell(0).textContent = fname;
    newRow.insertCell(1).textContent = lname;
    newRow.insertCell(2).textContent = email;

    // Hide the form and clear input fields
    popupForm.style.display = 'none';
    overlay.style.display = 'none';
    userForm.reset();
});

//  closes the popup
overlay.addEventListener('click', () => {
    popupForm.style.display = 'none';
    overlay.style.display = 'none';
});