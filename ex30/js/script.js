import { Grade } from "./class/grade.js";
import { Student } from "./class/student.js";

function capitalize(word){
    let endWord = word.slice(1); 
    return word[0].toUpperCase() + endWord.toLowerCase();
}

function filterGradesByStudent(tab, student){
    return tab.filter(grade => grade.student === student);
}

function filterGradesByField(tab, field){
    return tab.filter(grade => grade.field === field);
}

function filterGradesResult(averageOutput, isStudent, isField){
    let filteredGrades;
    if(isStudent && isField){
        filteredGrades = filterGradesByStudent(allGrades, allStudent[displayStudentSelect.value-1]);
        filteredGrades = filterGradesByField(filteredGrades, allLesson[displayFieldSelect.value-1]); 
        averageOutput.innerHTML += `en <b>${allLesson[displayFieldSelect.value-1]}</b> de <b>${allStudent[displayStudentSelect.value-1]}</b> : `;
    } else{
        if(isStudent){
            filteredGrades = filterGradesByStudent(allGrades, allStudent[displayStudentSelect.value-1]);
            averageOutput.innerHTML += `de <b>${allStudent[displayStudentSelect.value-1]}</b> : `;
        }
        else{
            filteredGrades = filterGradesByField(allGrades, allLesson[displayFieldSelect.value-1]);
            averageOutput.innerHTML += `en <b>${allLesson[displayFieldSelect.value-1]}</b> : `;
        }
    }
    return filteredGrades;
}

function displayResults(filteredGrades, data, averageOutput, isStudent, isField){
    let gradeSum=0;

    averageOutput.innerHTML = "La moyenne générale "; 

    if(isStudent && isField){
        averageOutput.innerHTML += `en <b>${allLesson[displayFieldSelect.value-1]}</b> de <b>${allStudent[displayStudentSelect.value-1]}</b> : `;
    } else{
        if(isStudent){
            averageOutput.innerHTML += `de <b>${allStudent[displayStudentSelect.value-1]}</b> : `;
        }
        else{
            averageOutput.innerHTML += `en <b>${allLesson[displayFieldSelect.value-1]}</b> : `;
        }
    }

    data.innerHTML += "<tr>";
    filteredGrades.forEach((element) => {
        gradeSum += element.grade;
        data.innerHTML += `
    <td>${element.student.firstname}</td>
    <td>${element.student.lastname}</td>
    <td>${element.grade}</td>
    <td>${element.field}</td></tr>`;
    });

    averageOutput.innerHTML+= `<b>${(gradeSum / filteredGrades.length).toFixed(2)}</b>`
}

function switchFormHiddenState(formId, button){
    const form = document.getElementById(formId); 
    if(form.className == "hidden"){
        form.classList.remove("hidden");
        button.innerText = "ON"
    }
    else{
        form.classList.add("hidden");    
        button.innerText = "OFF"
    }   
}

function submitStudent(){
    const inputFirstname = document.getElementById("student-firstname"); 
    const inputLastname = document.getElementById("student-lastname"); 

    allStudent.push(new Student(capitalize(inputFirstname.value), inputLastname.value.toUpperCase())); 

    updateStudentSelect(); 

    inputFirstname.value = ""; 
    inputLastname.value = ""; 
}

function submitLesson(){
    const inputLessonName = document.getElementById("lesson-field"); 

    allLesson.push(capitalize(inputLessonName.value)); 

    updateLessonSelect(); 

    inputLessonName.value = ""; 
}

function submitGrade(){
    const inputGradeStudent = document.getElementById("grade-student"); 
    const inputGrade = document.getElementById("grade"); 
    const inputGradeField = document.getElementById("grade-field"); 

    if(inputGradeStudent.value == 0 || inputGradeField.value == 0 || inputGrade=="")
        return; 

    allGrades.push(new Grade(allStudent[inputGradeStudent.value-1], Number(inputGrade.value), allLesson[inputGradeField.value-1])); 

    updateGradeDisplay();

    inputGrade.value = ""; 
}

function updateStudentSelect(){
    gradeStudentSelect.innerHTML = "<option value=0 >Sélectionnez un étudiant</option>";
    displayStudentSelect.innerHTML = "<option value=0 >Sélectionnez un étudiant</option>";  

    for(let i = 1; i <= allStudent.length; i++){
        gradeStudentSelect.innerHTML += `<option value=${i}>${allStudent[i-1].firstname} ${allStudent[i-1].lastname}</option>`; 
        displayStudentSelect.innerHTML += `<option value=${i}>${allStudent[i-1].firstname} ${allStudent[i-1].lastname}</option>`; 
    }
}

function updateLessonSelect(){
    gradeFieldSelect.innerHTML = "<option value=0 >Sélectionnez une matière</option>";
    displayFieldSelect.innerHTML = "<option value=0 >Sélectionnez une matière</option>";  

    for(let i = 1; i <= allLesson.length; i++){
        gradeFieldSelect.innerHTML += `<option value=${i}>${allLesson[i-1]}</option>`; 
        displayFieldSelect.innerHTML += `<option value=${i}>${allLesson[i-1]}</option>`; 
    }
}

function updateGradeDisplay(){
    const data = document.getElementById("table-data"); 
    const averageOutput = document.getElementById("average-grade"); 

    let isStudent = displayStudentSelect.value != 0; 
    let isField = displayFieldSelect.value != 0;
    let filteredGrades; 
    let gradeSum = 0; 

    data.innerHTML = ""; 
    averageOutput.innerHTML =""; 

    if(!isStudent && !isField)
        return; 
    
    filteredGrades = filterGradesResult(averageOutput, isStudent, isField); 
    displayResults(filteredGrades, data, averageOutput, isStudent, isField);
}

let allStudent = []; 
let allLesson = []; 
let allGrades = []; 

const displayStudentButton = document.getElementById("add-student-visibility");
const displayLessonButton = document.getElementById("add-lessonfield-visibility");
const displayGradeButton = document.getElementById("add-grade-visibility");

const btnStudent = document.getElementById("btnajoutstudent");
const btnLesson = document.getElementById("btnajoutmatiere");
const btnGrade = document.getElementById("btnajoutnote");

const gradeStudentSelect = document.getElementById("grade-student");
const gradeFieldSelect = document.getElementById("grade-field");

const displayStudentSelect = document.getElementById("student-choice");
const displayFieldSelect = document.getElementById("lessonfield-choice");

btnStudent.addEventListener("click", () => submitStudent());
btnLesson.addEventListener("click", () => submitLesson());
btnGrade.addEventListener("click", () => submitGrade());

displayStudentButton.addEventListener("click",() => switchFormHiddenState("add-student-form", displayStudentButton));
displayLessonButton.addEventListener("click",() => switchFormHiddenState("add-lessonfield-form", displayLessonButton));
displayGradeButton.addEventListener("click",() => switchFormHiddenState("add-grade-form", displayGradeButton));

displayStudentSelect.addEventListener("change", () => updateGradeDisplay()); 
displayFieldSelect.addEventListener("change", () => updateGradeDisplay()); 