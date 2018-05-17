function send() {
  var yourName = document.getElementById('yourName').value
  var myComment = document.getElementById('myComment').value
  var commentList = document.getElementById('comments').value

  // Create Element
  var newName = document.createElement('h1')
  var newComment = document.createElement('p')
  var newP = document.createElement('p')
  var newDate = new Date()
  var deleteBtn = document.createElement('button')
  var buttonText = document.createTextNode("Delete Comment")
  

  // Setting Variables
  newName.innerHTML = yourName
  newComment.innerHTML = myComment
  newP.innerHTML = newDate.toString()

  // Append Comment delete Button
  deleteBtn.appendChild(buttonText)

  // Append to comments
  document.getElementById('comments').appendChild(newName),
  document.getElementById('comments').appendChild(newComment),
  document.getElementById('comments').appendChild(newP),
  document.getElementById('comments').appendChild(deleteBtn);

  // Delete Button Command
  deleteBtn.onclick = function(){
    document.getElementById('comments').removeChild(newName),
    document.getElementById('comments').removeChild(newComment),
    document.getElementById('comments').removeChild(newP),
    document.getElementById('comments').removeChild(deleteBtn);
  }
}
