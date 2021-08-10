function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
  return 'This one is on me!';
  } else if (someValue > 2000 && someValue < 2499){
      return 'I will gladly take your thirty bucks.'
    } else {
      return 'No can do.';
     }
  }

function ternaryCheckCity(city){
  let thecity = city === 'NYC' ? 'Ok, sounds good.' : "No go.";
  return (thecity)
}
   


function switchOnCharmFromTip(tip){
switch (tip){
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return "Bye.";
  }
}
