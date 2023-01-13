$header__menu = document.querySelector('.header__menu');
$header__nav = document.querySelector('.header__nav');
$contact__number = document.querySelector('.contact__menu--number');
$contact__message = document.querySelector('.contact__menu--message');
$contact__slideShow = document.querySelector('.contact__slide-show');

$header__menu.addEventListener('click', (e) => {
  if($header__nav.style.display === 'none') {
    $header__nav.style.display = 'inherit';
    $header__menu.style.backgroundColor = 'var(--color-dark)';
  } else {
    $header__nav.style.display = 'none';
    $header__menu.style.backgroundColor = null;
  }
});

$contact__number.addEventListener("click" , (e) => {
  $contact__slideShow.style.left = '0';
  
  $contact__number.style.backgroundColor = '';
  $contact__number.style.color = '';

  $contact__message.style.backgroundColor = '';
  $contact__message.style.color = '';
});

$contact__message.addEventListener("click" , (e) => {
  $contact__slideShow.style.left = '-100vw'; 

  $contact__number.style.backgroundColor = 'white';
  $contact__number.style.color = 'black';

  $contact__message.style.backgroundColor = 'var(--color-main)';
  $contact__message.style.color = 'white';
})
