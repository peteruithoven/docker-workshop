var textarea = document.getElementById('content');
textarea.value = 'Loading...';

fetch('api/content')
  .then(function(response) {
    if (!response.ok) throw Error('Could not load content');
    return response.text();
  })
  .then(function(content) {
    textarea.value = content;
    textarea.onkeyup = function() {
      fetch("api/content", {
        method: "POST",
        body: textarea.value
      })
    };
  });
