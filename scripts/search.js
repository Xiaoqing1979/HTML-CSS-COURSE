function performGoogleSearch()
{
  var searchKeyword = document.getElementById('search-input-box').value;

  if (searchKeyword.trim() !== '')
  {
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchKeyword);
    window.open(searchUrl, '_blank');
  }
}

var searchButton = document.getElementById('search-button');
searchButton.onclick = performGoogleSearch;



