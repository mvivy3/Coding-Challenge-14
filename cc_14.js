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
