let avaibleKeywords = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Easy Tutorials',
  'Web Design Tutorials',
  'Where to learn coding online',
  'Where to learn web technik',
  'How to create a website',
  'How to put an website online'
];

const resultbox = document.querySelector(".search-autocomplate-box");
const inputBox = document.getElementById("search-input-box");


inputBox.onkeyup = () =>
{
  let result = [];
  let input = inputBox.value;

  if (input.length)
  {
    result = avaibleKeywords.filter(
      (keyword) =>
      {
        return keyword.toLowerCase().includes(input.toLowerCase());
      }
    );
    console.log(result);
  }

  display(result);

  if (!result.length)
  {
    resultbox.innerHTML = '';
  }
}

function display(result)
{
  const content = result.map((list) =>
  {
    return '<li onclick=selectInput(this)>' + list + '</li>';
  });

  console.log(content.join(''));
  resultbox.innerHTML = '<ul>' + content.join('') + '</ul>'
}


function selectInput(list)
{
  inputBox.value = list.innerHTML;
  resultbox.innerHTML = '';
}