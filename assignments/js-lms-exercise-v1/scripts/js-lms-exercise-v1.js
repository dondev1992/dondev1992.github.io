const testData = [
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 70,
    studentId: 1,
    studentName: "Bob Ross",
    submissionDate: "12/20/2020",
  },
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 77,
    studentId: 16,
    studentName: "Diana Ross",
    submissionDate: "12/20/2020",
  },
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 82,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "12/20/2020",
  },
  {
    quizName: "History 1",
    quizModule: "History",
    quizScore: 88,
    studentId: 14,
    studentName: "Dylan Roberts",
    submissionDate: "12/20/2020",
  },
  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 82,
    studentId: 1,
    studentName: "Bob Ross",
    submissionDate: "1/20/2021",
  },
  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 89,
    studentId: 16,
    studentName: "Diana Ross",
    submissionDate: "1/20/2021",
  },

  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 73,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "1/20/2021",
  },

  {
    quizName: "History 2",
    quizModule: "History",
    quizScore: 85,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "1/20/2021",
  },
  {
    quizName: "Reading Comprehension",
    quizModule: "English",
    quizScore: 60,
    studentId: 15,
    studentName: "Steve Smith",
    submissionDate: "2/20/2020",
  },
  {
    quizName: "Reading Comprehension",
    quizModule: "English",
    quizScore: 83,
    studentId: 16,
    studentName: "Diana Ross",
    submissionDate: "2/20/2020",
  },
  {
    quizName: "Reading Comprehension",
    quizModule: "English",
    quizScore: 70,
    studentId: 14,
    studentName: "Dylan Roberts",
    submissionDate: "2/20/2020",
  },
];
//Helper Functions

// reset function

const reset = () => {
  location.reload();
};

//average function

const average = (list, quantity) => {
  let sum = null;
  for (const count of list) {
    sum += count;
  }
  finalAverage = (sum / quantity).toFixed(1);
  console.log(finalAverage);
  return finalAverage;
};
// generate array list function

const generateList = (arrayData, selector) => {
  for (let i = 0; i < arrayData.length; i++) {
    const listTitle = document.createElement("h3");
    const unorderedList = document.createElement("ul");
    const itemQuizName = document.createElement("li");
    const itemQuizModule = document.createElement("li");
    const itemQuizScore = document.createElement("li");
    const itemStudentId = document.createElement("li");
    const itemStudentName = document.createElement("li");
    const itemSubmissionDate = document.createElement("li");

    listTitle.innerText = `Submission #${arrayData.indexOf(arrayData[i]) + 1}`;
    itemQuizName.innerText = `Quiz Name: ${arrayData[i].quizName}`;
    itemQuizModule.innerText = `Quiz Module: ${arrayData[i].quizModule}`;
    itemQuizScore.innerText = `Quiz Score: ${arrayData[i].quizScore}`;
    itemStudentId.innerText = `Student Id: ${arrayData[i].studentId}`;
    itemStudentName.innerText = `Student Name: ${arrayData[i].studentName}`;
    itemSubmissionDate.innerText = `Submission Date: ${arrayData[i].submissionDate}`;

    unorderedList.appendChild(itemQuizName);
    unorderedList.appendChild(itemQuizModule);
    unorderedList.appendChild(itemQuizScore);
    unorderedList.appendChild(itemStudentId);
    unorderedList.appendChild(itemStudentName);
    unorderedList.appendChild(itemSubmissionDate);

    document.querySelector(`#${selector}`).appendChild(listTitle);
    document.querySelector(`#${selector}`).appendChild(unorderedList);
  }
};

// generate object list function
const generateObjectList = (objectData, title, selector) => {
  const listTitle = document.createElement("h3");
  const unorderedList = document.createElement("ul");
  const itemQuizModule1 = document.createElement("li");
  const itemQuizModule2 = document.createElement("li");

  listTitle.innerText = title;
  itemQuizModule1.innerText = `English: ${objectData.English}`;
  itemQuizModule2.innerText = `History: ${objectData.History}`;

  unorderedList.appendChild(itemQuizModule1);
  unorderedList.appendChild(itemQuizModule2);

  document.querySelector(`#${selector}`).appendChild(listTitle);
  document.querySelector(`#${selector}`).appendChild(unorderedList);
};
// Filter By Date Feature

const filterByDate = (event) => {
  let input = event.target.parentNode.querySelector("input");
  let date = input.value;
  const selectorValue = "date-results";
  console.log(date);
  const submissions = [];
  if (testData.length < 1) {
    console.log(submissions);
  } else {
    for (const submission of testData) {
      if (date === submission.submissionDate) {
        submissions.push(submission);
      }
    }
    console.log(submissions);
  }
  input.value = "";
  generateList(submissions, selectorValue);
};

document.getElementById("date-button").addEventListener("click", filterByDate);

// filterByDate("1/20/2021", emptyArray);

// Filter By StudentId Feature

const filterByStudentId = (event) => {
  let input = event.target.parentNode.querySelector("#id");
  let studentId = parseInt(input.value);
  const selectorValue = "id-results";

  const students = [];

  if (testData.length < 1) {
    console.log(students);
  } else {
    for (const student of testData) {
      if (studentId === student.studentId) {
        students.push(student);
      }
    }
    console.log(students);
  }
  generateList(students, selectorValue);
  input.value = "";
};

document
  .getElementById("id-button")
  .addEventListener("click", filterByStudentId);

// filterByStudentId(15, testData);

// Find Unsubmitted Feature

const studentNames = ["Diana Ross", "Steve Smith", "Bob Ross", "Dylan Roberts"];

const findUnsubmitted = (event) => {
  let input = event.target.parentNode.querySelector("#date-submitted");
  let date = input.value;
  let names = [...studentNames];
  let unsubmittedQuizNames = null;
  console.log(date);
  if (testData.length < 1) {
    document.querySelector("#unsubmitted-results").textContent = "Error";
  } else {
    for (const submission of testData) {
      if (date === submission.submissionDate) {
        let name = submission.studentName;
        for (let i = 0; i < names.length; i++) {
          if (name === names[i]) {
            names.splice(i, 1);
          }
        }
      }
    }
    console.log(names);
    unsubmittedQuizNames = names.length < 1 ? "none" : names;
  }
  document.querySelector(
    "#unsubmitted-results"
  ).textContent = `The students that haven't submitted assignmants on ${date} are: ${unsubmittedQuizNames}`;
  input.value = "";
};

document
  .getElementById("unsubmitted-button")
  .addEventListener("click", findUnsubmitted);
// findUnsubmitted("12/20/2020", studentNames, testData);

// Get Quiz Average Feature

const getAverageScore = () => {
  totalScore = [];
  if (testData.length > 0) {
    for (const submission of testData) {
      totalScore.push(submission.quizScore);
    }
    average(totalScore, totalScore.length);
  } else {
    console.log(totalScore);
  }
  document.querySelector(
    "#quiz-average"
  ).textContent = `Quiz Average: ${finalAverage}`;
};
document
  .getElementById("quiz-average-button")
  .addEventListener("click", getAverageScore);

// getAverageScore(testData);

// Average by Module

const getAverageScoreByModule = () => {
  const title = "Quiz Average Module";
  let englishArray = [];
  let = historyArray = [];
  let averageScoreModule = null;
  const selectorValue = "average-score";
  for (const module of testData) {
    if (module.quizModule === "English") {
      englishArray.push(module.quizScore);
    }
    if (module.quizModule === "History") {
      historyArray.push(module.quizScore);
    }
  }
  englishAverage = average(englishArray, englishArray.length);
  historyAverage = average(historyArray, historyArray.length);

  averageScoreModule = {
    English: englishAverage,
    History: historyAverage,
  };
  console.log(averageScoreModule);
  generateObjectList(averageScoreModule, title, selectorValue);
};
document
  .getElementById("average-score-button")
  .addEventListener("click", getAverageScoreByModule);
