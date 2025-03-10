// TASK 2: ADDING SUPPORT TICKETS DYNAMICALLY

function addTicket(customerName, issueDescription, priorityLevel){ // building a support ticjet 
    const ticketContainer = document.getElementById(`ticketContainer`); // append the support ticket
    const ticket = document.createElement(`div`); // 
    ticket.setAttribute(`class`, `ticket`);
   
    const nameHeading = document.createElement(`h2`); // heading for the customer's name
    nameHeading.textContent = issueDescription;
   
    const issueText = document.createElement(`p`); // paragraph for the issue description
    issueText.textContent = issueDescription;
   
    const priorityState = document.createElement(`span`); // label indicating priority level
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute(`class`, priorityLevel.toLowerCase());

    const resolveButton = document.createElement(`button`); // a resolve button to remove the ticket
    resolveButton.textContent = `Resolve`;
    resolveButton.setAttribute(`class`, `resolve-button`);
    
    const editButton = document.createElement(`button`)
    editButton.textContent = `Edit Ticket`;
    editButton.setAttribute(`class`, `edit-button`)
}

// TASK 3: Converting NodeLists to Arrays for Bulk Updates
function highlightingHighPriorityTickets(){ // function for highlighting high priority tickets
    const highlightingHighPriorityTickets = document.querySelectorAll(`.high`);
    const highPriorityArray = Array.from(highlightingHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = `purple`; // adding background color
        ticket.style.border = `3px blue`;// adding border color
    });
}
highlightingHighPriorityTickets()

const ticketContainer = document.getElementById(`ticketContainer`);
ticketContainer.addEventListener(`click`, function(){
    console.log(`Ricket Was Clicked`)
});
// Test Cases
addTicket(`Teddy Joseph`, `Not working, `Low`);
addTicket(`Lucy Elizabeth`, `Unavailable`, `High`);

//TASK 4: IMPLEMENTING TICKET RESOLUTION WITH EVENT BUBBLING
  resolveButton.addEventListener(`click`, function(event){ //attach a click event listener to the resolve button
    const nameInput = document.createElement(`input`);
    nameInput.setAttribute(`type`, `text`);
    nameInput.value = nameHeading.textContent

    const issueInput = document.createElement(`input`); // 
    issueInput.setAttribute(`type`, `text`);
    issueInput.value = issueText.textContent;

    const priorityInput = document.createElement(`input`);
    priorityInput.setAttribute(`type`, `text`);
    priorityInput.value = priorityState.textContent.split(": ")[1]
})

//Element tickets
ticket.appendChild(nameHeading);
ticket.appendChild(issueText);
ticket.appendChild(priorityState);
ticket.appendChild(resolveButton);
ticket.appendChild(editButton);
ticketContainer.appendChild(ticket);
