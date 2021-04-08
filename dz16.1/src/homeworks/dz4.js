const dz4 = () => {

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

let girls = [students[2], students[3], students[5]];
let boys = [students[0], students[1], students[4]];

function getPairsOfStudents(girls, boys){
    let pairs = [];
    for (let i = 0; i < 3; i++){
        pairs[i] = [girls[i], boys[i]];
    }
    return pairs;
}
const pairsOfStudents = getPairsOfStudents(girls, boys);

function giveThemes(pairsOfStudents, themes){
    let pairsWithThemes = [];
    for (let i = 0; i < 3; i++){
        pairsWithThemes[i] = [pairsOfStudents[i].join([" i "]), themes[i]];
    }
    return pairsWithThemes;
}
const pairsGaveThemes = giveThemes(pairsOfStudents, themes);

function giveMarks(students, marks){
    let studentsWithMarks = [];
    for (let i = 0; i < 6; i++){
        studentsWithMarks[i] = [students[i], marks[i]];
    }
    return studentsWithMarks;
}
const studentsGaveMarks = giveMarks(students, marks);

function getRandomMark(pairsOfStudents, themes){
    let pairWithRandomMark = [];
    const symbols = "12345";
    for (var i = 0; i < 3; i++){
        pairWithRandomMark[i] = [pairsOfStudents[i].join([" i "]), themes[i], symbols.charAt(Math.floor(Math.random() * symbols.length))];     
    }
    return pairWithRandomMark;
}
const pairsWithMarks = getRandomMark(pairsOfStudents, themes);

console.log(`Масив поділених на пари студентів:`);
console.log(pairsOfStudents);
console.log(`Пари після отримання тем:`);
console.log(pairsGaveThemes);
console.log(`Індивідуальна оцінка кожного студента:`);
console.log(studentsGaveMarks);
console.log(`Оцінка пари за проект:`);
console.log(pairsWithMarks);

return '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW4--------`;
}

export default dz4;