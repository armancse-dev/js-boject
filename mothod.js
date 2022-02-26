const student = {
    id: 101,
    balance: 5000,
    name: 'RJ kibria',
    major: 'mathematics',
    isRich: false,
    Subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treadDay: function (expense) { 
        this.balance = this.balance - expense;
        return this.balance;
    }
}

student.takeExam();
const remaining1 = student.treadDay(900);
const remaining2 = student.treadDay(500);
console.log(remaining2);