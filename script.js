const isWeekend = function (date) {
  let dayOfWeek = new Date(date).getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
};

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }
  celebrate() {
    return "Happy Birthday, let’s celebrate";
  }
}

class Employee extends Person {
  #salary = 0;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    return this.#salary * 12;
  }
  celebrate() {
    const year = new Date().getFullYear();
    const myBirthday = new Date(this.birthDayDate);
    myBirthday.setFullYear(year);

    if (isWeekend(myBirthday)) {
      return super.celebrate();
    } else {
      return "Happy Birthday, but I need to work";
    }
  }
}

const person1 = new Person("Yana", "Kuzina", 32, "1990-01-28");
const employee1 = new Employee("Timur", "Kuzin", 6, "2015-06-10", 300, "baker");
console.log(person1);
console.log(employee1);
console.log(person1.celebrate());
console.log(employee1.celebrate());
