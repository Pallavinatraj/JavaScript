class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    editProfile(newName, newId) {
        this.name = newName;
        this.id = newId;
    }
}


class Admin {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.assignments = [];
        this.lectures = [];
    }

    addStudent(student) {
        this.lectures.push(student)
    }

    removeStudent(studentId) {
        this.students = this.students.filter(s => s.id !== studentId);
    }

    addLecture(lecture) {
        this.lectures.push(lecture)
    }
    removeLecture(lectureId) {
        this.students = this.students.filter(l => l.id !== lectureId);
    }

    addAssignment(assignment) {
        this.lectures.push(assignment)
    }
    removeAssignment(assigmnetId) {
        this.students = this.students.filter(a => a.id !== assigmnetId);
    }

    getSortedLectures() {
        return this.lectures.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    getSortedAssignments() {
        return this.assignments.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    filterLecturesByTopic(topic) {
        return this.lectures.filter(l => l.topic.toLowerCase().includes(topic.toLowerCase()));
    }

    filterAssignmentsByTopic(topic) {
        return this.assignments.filter(a => a.topic.toLowerCase().includes(topic.toLowerCase()));
    }
}



let s1 = new Student("Kiran", "4MC20IS404");
let s2 = new Student("kavya", "4MC20CS404");
let s3 = new Student("pallavi", "4MC20EE404");
let s4 = new Student("basavaraj", "4MC20MCA404");

let admin = new Admin("Admin1");
admin.addStudent(s1);
admin.addStudent(s2);
admin.addStudent(s3);
admin.addStudent(s4);

admin.addLecture({ id: 1, topic: "JavaScript", date: "2025-01-19" });
admin.addLecture({ id: 2, topic: "HTML & CSS", date: "2025-01-20" });

admin.addAssignment({ id: 1, topic: "Data Structures", date: "2025-01-18" });
admin.addAssignment({ id: 2, topic: "Algorithms", date: "2025-01-17" });

let currentUser = s1;

// Toggle between Admin and Student role
function toggleUserRole() {
    currentUser = currentUser instanceof Admin ? s1 : admin;
    renderPage();
}

function renderPage() {
    if (currentUser instanceof Admin) {
        document.getElementById('admin-section').style.display = 'block';
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('assignments-section').style.display = 'block';
        document.getElementById('lectures-section').style.display = 'block';
        renderAdminUsersList();
    } else {
        document.getElementById('admin-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('assignments-section').style.display = 'block';
        document.getElementById('lectures-section').style.display = 'block';
        renderStudentProfile();
        renderLectures();
        renderAssignments();
    }
}


function renderStudentProfile() {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `Name: ${currentUser.name}, ID: ${currentUser.id}`;
}


function editProfile() {
    const newName = prompt("Enter new name:", currentUser.name);
    const newId = prompt("Enter new ID:", currentUser.id);
    currentUser.editProfile(newName, newId);
    renderStudentProfile();
}


function renderLectures() {
    const lecturesList = document.getElementById('lectures-list');
    lecturesList.innerHTML = '';
    admin.getSortedLectures().forEach(lecture => {
        const div = document.createElement('div');
        div.innerHTML = `Topic: ${lecture.topic}, Date: ${lecture.date}`;
        lecturesList.appendChild(div);
    });
}


function sortLectures() {
    renderLectures();
}


function filterLectures() {
    const topic = document.getElementById('lecture-filter').value;
    const filteredLectures = admin.filterLecturesByTopic(topic);
    const lecturesList = document.getElementById('lectures-list');
    lecturesList.innerHTML = '';
    filteredLectures.forEach(lecture => {
        const div = document.createElement('div');
        div.innerHTML = `Topic: ${lecture.topic}, Date: ${lecture.date}`;
        lecturesList.appendChild(div);
    });
}


function renderAssignments() {
    const assignmentsList = document.getElementById('assignments-list');
    assignmentsList.innerHTML = '';
    admin.getSortedAssignments().forEach(assignment => {
        const div = document.createElement('div');
        div.innerHTML = `Topic: ${assignment.topic}, Date: ${assignment.date}`;
        assignmentsList.appendChild(div);
    });
}


function sortAssignments() {
    renderAssignments();
}


function filterAssignments() {
    const topic = document.getElementById('assignment-filter').value;
    const filteredAssignments = admin.filterAssignmentsByTopic(topic);
    const assignmentsList = document.getElementById('assignments-list');
    assignmentsList.innerHTML = '';
    filteredAssignments.forEach(assignment => {
        const div = document.createElement('div');
        div.innerHTML = `Topic: ${assignment.topic}, Date: ${assignment.date}`;
        assignmentsList.appendChild(div);
    });
}


function showUsersList() {
    const adminUsersList = document.getElementById('admin-users-list');
    adminUsersList.innerHTML = 'Users List:<br>';
    admin.students.forEach(student => {
        const div = document.createElement('div');
        div.innerHTML = `Name: ${student.name}, ID: ${student.id}`;
        adminUsersList.appendChild(div);
    });
}


function showAddLectureForm() {
    document.getElementById('add-lecture-form').style.display = 'block';
}


function addLecture() {
    const topic = document.getElementById('lecture-topic').value;
    const date = document.getElementById('lecture-date').value;
    admin.addLecture({ id: admin.lectures.length + 1, topic, date });
    renderLectures();
    document.getElementById('add-lecture-form').style.display = 'none';
}


function showAddAssignmentForm() {
    document.getElementById('add-assignment-form').style.display = 'block';
}


function addAssignment() {
    const topic = document.getElementById('assignment-topic').value;
    const date = document.getElementById('assignment-date').value;
    admin.addAssignment({ id: admin.assignments.length + 1, topic, date });
    renderAssignments();
    document.getElementById('add-assignment-form').style.display = 'none';
}


renderPage();
