// object

const student = {
    name: "Olena",
    age: 25,
    skills: ["HTML"],
    hasIntership: false,
    // object method
    checkInternshipStatus: function () {
        if (this.hasIntership) {
            return "congratulations";
        } else {
            return "No worries you have time";
        }
    }
}

// Object constructor
function StudentConstructor(name, age, skills, hasIntership) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.hasIntership = hasIntership;
    // this is how to add the object method
    this.checkInternshipStatus = function () {
        // if(this.hasIntership) {
        //     return "congratulations";
        // }else {
        //     return("No worries you have time");
        // }
        return this.hasIntership ?
            "congratulations" : "No worries you have time";
    }
}


// class

class StudentClass {
    constructor(name, age, skills, hasIntership) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.hasIntership = hasIntership;

    }
    checkInternshipStatus() {
        return this.hasIntership ?
            "congratulations" : "No worries you have time";
    }
}
const vlad = new StudentConstructor("Vlad", 13, ["I know everything"], false);

const violeta = new StudentClass("Violeta", 24, ["Testing"], true);

console.log(vlad.name);
console.log(vlad.checkInternshipStatus());

console.log(violeta.name);
console.log(violeta.checkInternshipStatus());