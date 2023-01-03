$header__menu = document.querySelector('.header__menu');
$header__nav = document.querySelector('.header__nav');

$header__menu.addEventListener('click', (e) => {
  if($header__nav.style.display === 'none') {
    $header__nav.style.display = 'inherit';
    $header__menu.style.backgroundColor = 'var(--color-dark)';
  } else {
    $header__nav.style.display = 'none';
    $header__menu.style.backgroundColor = null;
  }
});
