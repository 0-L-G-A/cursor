import './styles.css';

const par = document.createElement('h1');
document.body.append(par);
par.innerHTML = 'Choose HW number and check the console';
par.style.color = 'white';

import HW1 from './dz1';
import HW2 from './dz2';
import HW3 from './dz3';
import HW4 from './dz4';
import HW5 from './dz5';
import HW6 from './dz6';
import HW7 from './dz7';
import HW8 from './dz8';
import HW10 from './dz10';
import HW11 from './dz11';
import HW12 from './dz12';
import HW13 from './dz13';
import HW15 from './dz15';

let chosenHW = Number(prompt('Please, select number of homework, which you want to run?', 1));

switch (chosenHW) {
  
  case 1:
    console.log(HW1());
    break;
  case 2:
    console.log(HW2());
    break;
  case 3:
    console.log(HW3());
    break;
  case 4:
    console.log(HW4());
    break;
  case 5:
    console.log(HW5());
    break;
  case 6:
    console.log(HW6());
    break;
  case 7:
    console.log(HW7());
    break;
  case 8:
    console.log(HW8());
    break;
  case 10:
    console.log(HW10());
    break;
  case 11:
    console.log(HW11());
    break;
  case 12:
    console.log(HW12());
    break;
  case 13:
    console.log(HW13());
    break;
  case 15:
    console.log(HW15());
    break;
  default:
    console.log(HW1());
}

