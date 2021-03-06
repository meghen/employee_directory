// On page load
function onReady(){
    // Request employees from server and display them to user
    getAllEmployees();

    // Listeners
    $('#add-employee').on('click', addEmployee);
    $('#directory-table-body').on('click', '.remove', removeEmployee);
    $('#directory-table-body').on('click', '.edit', startEdit);
    $('#cancel-edit').on('click', cancelEdit);
    $('#edit-employee').on('click', editEmployee);
}

// Cancel Edit preparation so user can add employees again
function cancelEdit(){
    // Hide Cancel buttons and show Add button
    showButton('cancel');

    // Clear Add/Edit form
    $('#last-name').val('')
    $('#first-name').val('')
    $('#title').val('')
    $('#salary').val('')
    $('#address').val('')
    $('#city').val('')
    $('#state').val('')
    $('#zip').val('')
    $('#phone').val('')
}

// Toggles button shown in add/edit form
function showButton(option){
    // If called with "new", show Add Button and hide Edit Button
    if(option == 'cancel'){
        $('#add-employee').show();
        $('#edit-employee').hide();
        $('#cancel-edit').hide();
    // If called with "edit", show Edit Button and hide Add Button
    }else if(option == "edit"){
        $('#add-employee').hide();
        $('#edit-employee').show();
        $('#cancel-edit').show();
    }
}

// Set up forms and buttons for editing an employee
function startEdit(){
    // Show edit button
    showButton("edit");

    // Employee ID for corresponding row
    let employeeId = $(this).parent().parent().data('id');

    // Get employee record for corresponding row
    getOneEmployee(employeeId);
}

// Run scripts
$(document).ready(onReady);