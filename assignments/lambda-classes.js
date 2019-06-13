// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
class Instructor extends Person {
    constructor(personProps) {
        super(personProps);
        this.specialty = personProps.specialty;
        this.favLanguage = personProps.favLanguage;
        this.catchPhrase = personProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}
class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(PMProps) {
        super(PMProps);
        this.gradClassName = PMProps.gradClassName;
        this.favInstructor = PMProps.favInstructor;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(name, subject) {
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
    grade(name) {
        // min = Math.ceil(min);
        // max = Math.floor(max);
        return `${name} recives a score of` + " " + Math.floor(Math.random() * 100);
    }
}

const dan = new Instructor({
    name: 'Dan',
    location: 'Denver',
    age: 37,
    favLanguage: 'JavaScript, Python',
    specialty: 'Front-end',
    catchPhrase: `If you can do the thing, you can get paid to do the thing`
  });

const anthony = new Student({
    name: 'Anthony',
    location: 'Brooklyn',
    age: 29,
    className: "Web21",
    favSubjects: "Javascript",
});

const aj = new ProjectManager({
    name: "AJ",
    gradClassName: "Web18",
    favInstructor: "Josh",
});

console.log(aj.grade(anthony.name, 2));
console.log(dan.demo("Object Oriented Programming"));
console.log(dan.catchPhrase);
console.log(dan.grade(anthony, "JavaScript-IV"));
console.log(anthony.speak(anthony, location));
console.log(aj.standUp(aj.name, "web21_anthony"));