const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const chefImage = document.createElement('img');
  chefImage.src = 'images/chef.png';
  chefImage.alt = 'Chef';

  home.appendChild(createParagraph('Best colombian beans'));
  home.appendChild(createParagraph('Made with love'));
  home.appendChild(chefImage);
  home.appendChild(createParagraph('Order online or visit us!'));

  return home;
}

const loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
