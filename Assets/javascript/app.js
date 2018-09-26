const empCard = $('.content');


// render function for view
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



// buttons that target functions
$("#view").on("click", render);

