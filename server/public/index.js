function sendJson() {
  const url = "http://localhost:3000/people";
  const jsonTextarea = document.getElementById('json');
  let parsedJSON = "";

  try {
    parsedJSON = JSON.parse(jsonTextarea.value);
  } catch (e) {
    printMessage('error');
    return false;
  }

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(parsedJSON),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
    .catch(() => printMessage('server'))
    .then(() => printMessage('success'));
}

function printMessage(type) {
  const messageContainer = document.getElementById('message');

  switch (type) {
    case 'server':
      messageContainer.classList.remove('info', 'success');
      messageContainer.classList.add('error');
      messageContainer.innerHTML = "Sorry, there is a server error.";
      break;
    case 'error':
      messageContainer.classList.remove('info', 'success');
      messageContainer.classList.add('error');
      messageContainer.innerHTML = "Your JSON is not valid.";
      break;
    case 'success':
      messageContainer.classList.remove('info', 'error');
      messageContainer.classList.add('success');
      messageContainer.innerHTML = "Congratulations, your JSON is valid!";
      break;
    default:
      messageContainer.classList.remove('success', 'error');
      messageContainer.classList.add('info');
      messageContainer.innerHTML = "Please write your JSON and press send.";
      break;
  }
}

document.getElementById('sendJSON').addEventListener('click', () => sendJson());
