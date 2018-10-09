const empCard = $('.content');


// render function for view button
const render = function (){
  empCard.empty();
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
const addEmp = function (event){
  event.preventDefault();
  const name = $(".empName").val().trim();
  const office = $(".offNum").val().trim();
  const phone = $(".phoNum").val().trim();
  
 let newEmployee = {
   name: name,
   officeNum: office,
   phoneNum: phone,
 }
 employeeList.push(newEmployee);
  render();
}

// view for update is the same as add display
// updateEmp function

const updateEmp = function (event) {
  event.preventDefault();
  const name = $(".empName").val().trim();
  for (let i=0; i<employeeList.length; i++){
    if (name === employeeList[i].name){
      const office = $(".offNum").val().trim();
      const phone = $(".phoNum").val().trim();
      employeeList[i].officeNum = office;
      employeeList[i].phoneNum = phone;

    } else {
      alert ("There is no employee by that name");
    }
  }
}




// view for verify and delete are the same below



// function for verification





// function for deletion


// side nav button functions
$("#view").on("click", render);
// $("#add").on("click", addView);
// $("#update").on("click", addView);
// $("#verify").on("click", verifyView);
// $("#delete").on("click", verifyView)

// submit button functions
$("#submit").on("click", addEmp);