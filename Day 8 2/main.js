// function Student(name, grade){
//     this.name = name;
//     this.grade = grade;
// }
// const identity = new Student('Edem', 'grade4');



//First Assignment
class NewStudent{
  _name 
  _age 
  _grade
  _gpa
  _courses= []

  constructor(name, age, grade, gpa, courses = []){
      this._name=name;
      this._age=age;
      this._grade=grade;
      this._gpa=gpa;
      this._courses = courses
  }
  calculateGpa(newGpa){
      if(newGpa>0){
          this.gpa=newGpa;
      }else{
          console.log('Are you a student?')
      }
  }
  setCourses(newCourses){
    if(newCourses.length>5){
      this.courses = newCourses
    }else{
      console.log('The minimum charcters must be more that 5')
    }
  }
  setName(newName){
    if(newName.length>5){
        this.age=newName;
    }else{
        console.log('6 minimum characters are required')
    }
}
  setAge(newAge){
      if(newAge>0){
          this.age=newAge;
      }else{
          console.log('The age is invalid')
      }
  }
getName(){
  return this._name
}
getCourses(){
  return this._courses
}
  getAge(){
      return this._age
  }

printCourses(){ 
  console.log(`courses:\n${this.courses.join(",")}`);
}
sayHello(){
`I am ${this.name}from grade ${this.grade}.\nI study ${this._courses(" , ")}`
}
};
 const firstStudent = new NewStudent('Mark', 12, 6, 3.60, 'Business')

class HighSchool extends NewStudent{
  constructor(name, age, grade, gpa, courses){
    super(name, age, grade, gpa, courses);
  }
  sayHello(){
    `I am ${this.name}I am in a great High School.\nI study ${this._courses(" , ")}`
    }
}

let studentRoll = [];
function createStudent(name, age, grade, gpa, courses){
  let newStudent = newStudent(name, age, grade, gpa, courses);
  newStudent.setCourses(courses);
  console.log(newStudent)
}
function enrollStudent(student){
  studentRoll.push(student);
}

function searchStudentbyName(x){
  return x== "Edem";
}

function filterStudentByGrade(x){
  return x == 5;
}
function filterStudentByAge(minAge, maxAge){
     return minAge== 12 && maxAge == 14;
  };
