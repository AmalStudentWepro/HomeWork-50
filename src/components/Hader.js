export function createHeader(parent) {
  const header = document.createElement('header');
  header.className = 'site-header';

  const logo = document.createElement('div');
  logo.className = 'logo';

  const logoImg = document.createElement('img');
  logoImg.src = '/public/uzum.png';

  const logoText = document.createElement('span');
  logoText.textContent = 'Uzum market';

  logo.append(logoImg, logoText);

  const catalog = document.createElement('button');
  catalog.className = 'catalog-button';
  catalog.textContent = 'Каталог';

  const search = document.createElement('div');
  search.className = 'search';

  const input = document.createElement('input');
  input.placeholder = 'Искать товары и категории';

  const searchIcon = document.createElement('img');
  searchIcon.src = 'https://cdn-icons-png.flaticon.com/512/622/622669.png';
  searchIcon.alt = 'Поиск';

  search.append(input, searchIcon);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const icons = [
    { img: '/public/user.webp', text: 'Войти' },
    { img: '/public/heart.webp', text: 'Избранное' },
    { img: '/public/korzina.png', text: 'Корзина' }
  ];

  icons.forEach(item => {
    const icon = document.createElement('a');
    icon.className = 'icon';
    icon.href = '#';

    const img = document.createElement('img');
    img.src = item.img;

    const span = document.createElement('span');
    span.textContent = item.text;

    icon.append(img, span);
    actions.appendChild(icon);
  });

  header.append(logo, catalog, search, actions);
  parent.appendChild(header);
}
