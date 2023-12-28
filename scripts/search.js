function handleKeyPress(event)
{
  if (event.keyCode === 13)
  {
    performGoogleSearch();
  }
}

function performGoogleSearch()
{
  var searchKeyword = document.getElementById('search-input-box').value;

  if (searchKeyword.trim() !== '')
  {
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchKeyword);
    window.open(searchUrl, '_blank');
  }
}

var searchButton = document.getElementsByClassName('search-button');
searchButton.onclick = performGoogleSearch;

var searchInputBox = document.getElementById('search-input-box');
searchInputBox.onkeyup = handleKeyPress;

