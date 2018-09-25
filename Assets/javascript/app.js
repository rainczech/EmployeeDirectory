const empCard = $('.content');

const render = function (){
  $('.content').empty();
  for (let i=0; i<employeeList.length; i++){
    const newCard = $('<div>');
    newCard.text(`<p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p>`)
    newCard.attr('class', 'card')
    empCard.append(newCard)
    
    //   for( let i = 0; i < studentList.length; i++ ) {
    //     $('.content').append(`<p>${studentList[i]}</p>`);
    //   }
    // }
    
    render();
  }
}