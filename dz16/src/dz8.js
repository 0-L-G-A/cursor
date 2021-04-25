const dz8 = () => {

class Student{
    constructor(university, course, fullName, marks = [5, 4, 4, 5], isDismiss = false){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismiss = isDismiss;
    }

    getInfo(){
        return `Student: ${this.fullName} of ${this.course} course, ${this.university}`;
    }

    get getMarks(){
        return !this.isDismiss ? this.marks : null;
    }

    set setMarks(mark){
        return !this.isDismiss ? this.marks.push(mark) : null;
    }

    getAverageMark(){
        const avMark = this.marks.reduce(function(a, b) {return a + b}, 0) / this.marks.length;
        return !this.isDismiss ? avMark : null;
    }

    dismiss() {
        this.isDismiss = true;
    }

    recover() {
        this.isDismiss = false;
    }
}

const student = new Student('Drogobych pedagogical university', '5', 'Olga Lyubas');
console.log("Іnfo about student:", student.getInfo());
console.log(`List of marks: ${student.getMarks}`);
student.setMarks = 5;
console.log(`List after setting new mark 5: ${student.getMarks}`);
console.log(`Student's average mark: ${student.getAverageMark()}`);
student.dismiss();
console.log(`Marks after dismissing: ${student.getMarks}`);
student.recover();
console.log(`Marks after recovering: ${student.getMarks}`);

return '%c%s', 'color: green; font: bold 1.6em/1 Arial; background: linear-gradient( paleGreen , powderBlue);' ,`---------This is the result of HW8--------`;
}

export default dz8;