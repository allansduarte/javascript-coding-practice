// O(n) time | O(1) space
function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        const gradeDifference = 5 - (grades[i] % 5);
        if (grades[i] < 38) continue;

        if (gradeDifference < 3) {
            grades[i] = grades[i] + gradeDifference;
        }
    }

    return grades;
}
