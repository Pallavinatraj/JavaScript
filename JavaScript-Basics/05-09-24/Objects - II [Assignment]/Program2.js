function gradeStudentMarks(marks) {
    for (let i = 0; i < marks.length; i++) {
        let grade = marks[i];
        let highestScoredStudent = null;
        let highestTotalMarks = -1;

        for (let j = 0; j < grade.students.length; j++) {
            let student = grade.students[j];
            let totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);

            // Check if this student has the highest total marks
            if (totalMarks > highestTotalMarks) {
                highestTotalMarks = totalMarks;
                highestScoredStudent = student;
            }
        }
        if (highestScoredStudent) {
            console.log(`Grade: ${grade.grade}`);
            console.log(`Highest Scored Student: ${highestScoredStudent.name}`);
            console.log(`Total Marks: ${highestTotalMarks}`);
            console.log('---------------------------');
        }
    }
}
gradeStudentMarks([
    {
        grade: "V",
        students: [
            { name: "Nrupul", marks: [10, 20, 30] },
            { name: "Prateek", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VI",
        students: [
            { name: "Aman", marks: [10, 20, 30] },
            { name: "Albert", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VII",
        students: [
            { name: "Yogesh", marks: [10, 20, 30] },
            { name: "Sandhya", marks: [20, 30, 40] }
        ]
    }
]);

