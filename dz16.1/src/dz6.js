const dz6 = () => {

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
  function getSubjects(student){
    const arrayOfSubjects = Object.keys(student.subjects);
    const newArray = arrayOfSubjects.map((item) => {return (item.charAt(0).toUpperCase() + item.slice(1)).replace("_", " ")});
    return newArray;
    }

  function getAverageMark(student){
    const allMarks = (Object.values(student.subjects)).flat(1);
    return (allMarks.reduce((a, b) => a + b)/allMarks.length).toFixed(2);
  }

  function getStudentInfo(student){
    const avMark = getAverageMark(student);
    const studentInfo = {
      course: student.course,
      name: student.name,
      averageMark: avMark
    }
    return studentInfo;
  }

  function getStudentsNames(students){
    const studentsNames = students.map(student => student.name);
    return studentsNames.sort();
  }

  function getBestStudent(students){
    let res = [];
    for (const i of students) {  
      res.push({ name: i.name, averageMark: getAverageMark(i) });
    }
    res.sort((a, b) => {return b.averageMark - a.averageMark});
    return res[0].name;
  }

  function calculateWordLetters(word){
    let res = {};
    let mySet = new Set(word.toLowerCase()); 
    for (const i of mySet){
      let amountSameLetters = ((word.toLowerCase()).split('')).filter((letter) => i === letter); 
      res[i] = amountSameLetters.length;
    }
    return res;
  }

//1
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 1--------`);
console.log(`Функція, що повертає список предметів для окремого студента`);
console.log(getSubjects(students[0]));
//2
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 2--------`);
console.log(`Функція, що повертає середню оцінку по усім предметам для переданого студента`);
console.log(getAverageMark(students[0]));
//3
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 3--------`);
console.log(`Функція, що повертає курс, імя і середню оцінку студента `);
console.log(getStudentInfo(students[0]));
//4
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 4--------`);
console.log(`Функція, що повертає імена студентів у алфавітному порядку`);
console.log(getStudentsNames(students));
//5
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 5--------`);
console.log(`Функція, яка повертає кращого студента зі списку по показнику середньої оцінки`);
console.log(getBestStudent(students));
//6
console.log('%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------FUNCTION 6--------`);
console.log(`Функція, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.`);
console.log(calculateWordLetters("Test"));

return '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW6--------`;
}

export default dz6;