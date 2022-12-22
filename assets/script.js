document.getElementById('semester').addEventListener('change', (e) => {
  switch(e.target.value) {
    case '10-1':
      fetch('./10-1.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('content').innerHTML = html
      })
      break;
      case '10-2':
      fetch('./10-2.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('content').innerHTML = html
      })
      break;
      case '11-1':
      fetch('./11-1.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('content').innerHTML = html
      })
      break;
  }
})