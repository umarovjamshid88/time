var time = +prompt('enter time');
switch (true) {
    case time > 0 && time <= 4:
    alert('Ночь');
    break;
  case time > 4 && time <= 11:
    alert('Утро');
    break;
  case time > 11 && time <= 16:
    alert('День');
    break;
  case time > 16 && time <= 24:
    alert('Вечер');
    break;
  
  default:
      alert('its not in 24 hour time zone ');
    break;
}
