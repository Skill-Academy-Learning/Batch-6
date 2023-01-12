//Object -- car, human, stonen, water bottle

const personSreekanth = {
  firstName: "Sreekanth", // key: value
  lastName: "M E", // key: value
  profession: "Faculty", // key: value
  skills: ["Node", "React", "HTML", "CSS"],
  numOfYearsOfExperience: 20,
  isAmericanCitizen: false,
  isIndianCitizen: true,
};

let personJoeBiden = {
  firstName: "Joe",
  lastName: "Biden",
  profession: "President",
  skills: ["Law Making", "Public Speaking"],
  numOfYearsOfExperience: 50,
  isAmericanCitizen: true,
  isIndianCitizen: false,
  spouse: {
    firstName: "Jill",
    lastName: "Biden",
    profession: "First Lady",
    skills: [],
    numOfYearsOfExperience: null,
    isAmericanCitizen: true,
    isIndianCitizen: false,
  },
};

console.log(personJoeBiden);
