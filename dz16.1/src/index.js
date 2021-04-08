import './styles.css';

import HW1 from './homeworks/dz1';
import HW2 from './homeworks/dz2';
import HW3 from './homeworks/dz3';
import HW4 from './homeworks/dz4';
import HW5 from './homeworks/dz5';
import HW6 from './homeworks/dz6';
import HW7 from './homeworks/dz7';
import HW8 from './homeworks/dz8';

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
  default:
    console.log(HW1());
}