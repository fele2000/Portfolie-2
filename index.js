//Student and Grades Analysis

//Function to generate a random number(grade) between X and Y
function getRandomGrade(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Array with random grades from 50-100, since 0-100 always gave a low class average.
let gradeArray = [
    getRandomGrade(50, 100),
    getRandomGrade(50, 100),
    getRandomGrade(50, 100),
    getRandomGrade(50, 100),
    getRandomGrade(50, 100),
    getRandomGrade(50, 100),
    getRandomGrade(50, 100),
    getRandomGrade(50, 100)];

console.log(gradeArray);

//The length of the gradeArray
const gradeArrayLength = gradeArray.length;
console.log(gradeArrayLength);

// for loop that spits out each individual number grade and their corresponding letter grade equivalent
for (let i = 0; i < gradeArrayLength; i++) {
    if (gradeArray[i] >= 90) {
        console.log(gradeArray[i]+': A');
    } else if (gradeArray[i] >= 80) {
        console.log(gradeArray[i]+': B');
    } else if (gradeArray[i] >= 70) {
        console.log(gradeArray[i]+': C');
    } else if (gradeArray[i] >= 60) {
        console.log(gradeArray[i]+': D');
    } else {
        console.log(gradeArray[i]+': F');
    }
}

// for loop to find the average of the sum of the array values.
let arrayTotal = 0;
for (let i = 0; i < gradeArrayLength; i++) {
    arrayTotal += gradeArray[i];
}
const gradeArrayAverage = arrayTotal / gradeArrayLength;
if (gradeArrayAverage >= 90) {
    console.log('Overall class performance is: Excellent')
} else if (gradeArrayAverage >= 80) {
    console.log('Overall class performance is: Good')
} else if (gradeArrayAverage >= 70) {
    console.log('Overall class performance is: Satisfactory')
} else {
    console.log('Overall class performance needs improvement')
}

//Highest, lowest and average value in gradeArray
console.log(Math.max(...gradeArray));
console.log(Math.min(...gradeArray));
console.log(gradeArrayAverage);


//Treasure Hunter
console.log('Treasure Hunter Task');
const islandArray = ['-','-','-','T','-'];
//The total moves on the 'island'
console.log(`There are ${islandArray.length} moves on the island`);

for (let i = 0; i < islandArray.length; i++) {
    if (islandArray[i] === 'T') {
        console.log('Treasure found at move ' + (islandArray.indexOf('T')+1) + ' :)');
    } else {
        console.log('No treasure Found :(');
    }
}

//How many treasures are present on the island
const valueToCount = 'T';
let count = 0;

islandArray.forEach(function(arrayPosition) {
    if (arrayPosition === valueToCount) {
        count++;
    }
});
console.log(`There was ${count} treasure(s) on the island`);


//Startup name generator
console.log('Startup name generator');
// Array 1: First part of the startup name
const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

// Array 2: Second part of the startup name
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

function getRandomName() {
    // Step 3: Select a random adjective
    const randomFirstWord = firstWords[Math.floor(Math.random() * firstWords.length)];

    // Step 4: Select a random noun
    const randomSecondWord = secondWords[Math.floor(Math.random() * secondWords.length)];

    // Step 5: Combine them into a single string
    return `${randomFirstWord} ${randomSecondWord}`;
}
console.log(getRandomName());


