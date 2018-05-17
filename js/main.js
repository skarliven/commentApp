function submit() {
  var leaveName = document.getElementById('leaveName').value
  var postComment = document.getElementById('postComment').value
  var commentList = document.getElementById('commentList').value

  // Create Element
  var newName = document.createElement('h1')
  var newComment = document.createElement('p')
  var newP = document.createElement('p')
  var newDate = new Date()
  var deleteBtn = document.createElement('button')
  var buttonText = document.createTextNode("Delete Comment")
  

  // Setting Variables
  newName.innerHTML = leaveName
  newComment.innerHTML = postComment
  newP.innerHTML = newDate.toString()

  // Append Comment delete Button
  deleteBtn.appendChild(buttonText)

  // Append to commentList
  document.getElementById('commentList').appendChild(newName),
  document.getElementById('commentList').appendChild(newComment),
  document.getElementById('commentList').appendChild(newP),
  document.getElementById('commentList').appendChild(deleteBtn);

  // Delete Button Command
  deleteBtn.onclick = function(){
    document.getElementById('commentList').removeChild(newName),
    document.getElementById('commentList').removeChild(newComment),
    document.getElementById('commentList').removeChild(newP),
    document.getElementById('commentList').removeChild(deleteBtn);
  }
}
