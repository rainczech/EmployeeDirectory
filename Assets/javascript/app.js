const empCard = $('.content');


// render function for view button
const render = function (){
  $('.content').empty();
  for (let i=0; i<employeeList.length; i++){
    const newCard = (`<div class="card">
    <p>${employeeList[i].name}</p>
    <p>${employeeList[i].officeNum}</p>
    <p>${employeeList[i].phoneNum}</p>
    </div>`);
    empCard.append(newCard);
  }
}

// function for add display and update (3 columns)




// addName function for submit
const addPerson = function (){




  render();
}

// view for update is the same as add display
// updateEmp function






// view for verify and delete are the same below



// function for verification





// function for deletion


// buttons that target functions
$("#view").on("click", render);
$("#add").on("click", addView);
$("#update").on("click", addView);
$("#verify").on("click", verifyView);
$()