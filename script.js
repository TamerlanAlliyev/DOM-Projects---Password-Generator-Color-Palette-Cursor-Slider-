"use strict";

const personDetails = {
  name: "Nihat",
  birthYear: 2003,
  caclulateAge: function () {
    console.log(2023 - this.birthYear);
  },
  showHobbies: function (hobby1, hobby2) {
    console.log(`${this.name}'s hobbies are ${hobby1}, ${hobby2}`);
  },
};

const studentDetails = {
  name: "Zeyneb",
  birthYear: 2000,
  class: "P237",
};

studentDetails.age = 23;

// personDetails.caclulateAge.apply(studentDetails);
// personDetails.showHobbies("playing chess", "reading books");

// personDetails.showHobbies.call(studentDetails, "eating", "crying");
// personDetails.showHobbies.call(studentDetails, ...["eating", "crying"]);
// personDetails.showHobbies.apply(studentDetails, ["eating", "crying"]);

const studentShowHobbies = personDetails.showHobbies.bind(
  studentDetails,
  "eating",
  "crying"
);

studentShowHobbies();
