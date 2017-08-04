// var theBod = document.getElementsByTagName('body');
// var myGrid = document.createElement('table');
// for(let x = 0; x < 30; x++){
//   var myTR = document.createElement('tr');
//   myGrid.appendChild(myTR);
//   for(var y = 0; y < 30; y++){
//     var myTD = document.createElement('td');
//     myTR.appendChild(myTD);
//     myTD.className = "square" + y;
//     myTD.innerText = "1";
//   }
// }

var myGrid = $('<table>');
for(let x = 0; x < 30; x++){
  var myTR = $('<tr>');
  myGrid.append(myTR);
  for(var y = 0; y < 30; y++){
    var myTD = $('<td>');
    myTR.append(myTD);
    myTD.text('1');
  }
}

$('body').append(myGrid);

myGrid.on('mouseover', function(event) {
  console.log(event.target);
  if($(event.target).is("td")) {
    $(event.target).text('0');
  }
})

myGrid.on('mouseout', function(event) {
  console.log(event.target);
  if($(event.target).is("td")) {
    $(event.target).text('1');
  }
})

myGrid.on('click', function(event) {
  console.log(event.target);
  if($(event.target).is("td")) {
    var wrong = $('<h2>');
    wrong.text('WRONG');
    $('body').append(wrong);
  }
})
