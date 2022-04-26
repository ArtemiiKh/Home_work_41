'use strict'

function Student(name, surname, yearOfBirth) {
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;

	this.visits = new Array(10);
	this.marks = new Array(10);


	Student.prototype.age = function () {
		return (new Date().getFullYear()) - this.yearOfBirth;
	};

	Student.prototype.addProgressArr = function (arr, value) {

		if (arr[arr.length - 1] !== undefined) throw new Error('Array is full!');

		for (let i = 0; i < arr.length; i++) {

			if (arr[i] === undefined) {
				arr[i] = value;
				break;
			}
		}

		return value;
	};

	Student.prototype.present = function () {
		this.addProgressArr(this.visits, true);
	};

	Student.prototype.absent = function () {
		this.addProgressArr(this.visits, false);
	};

	Student.prototype.mark = function (point) {

		if (typeof (point) !== 'number') throw new Error('Mark should be number!')
		if (point > 10) throw new Error('Mark should be <= 10!')

		Student.prototype.addProgressArr(this.marks, point);

	};

	Student.prototype.getAverageMarks = function () {

		if (this.marks[0] === undefined) throw new Error('Array with marks is empty!');

		let accum = 0;
		let i = 0;

		for (i; i < 10; i++) {

			if (this.marks[i] === undefined) break;
			accum += this.marks[i];
		}

		const averageMarks = (accum / i).toFixed(1);
		return averageMarks;
	};

	Student.prototype.summary = function () {

		if (this.visits[0] === undefined) throw new Error('Array with visits is empty!');

		const averageMarks = this.getAverageMarks();
		let classesPassed = 0;
		let visitedLessons = 0;
		const visitsIndex = 1;
		let i = 0;

		for (i; i < 10; i++) {

			if (this.visits[i] === undefined) break;
			classesPassed++;

			if (this.visits[i] === true) visitedLessons++;
		}

		const averageVisits = ((visitsIndex / classesPassed) * visitedLessons).toFixed(1);

		if ((averageMarks >= 9) && (averageVisits >= 0.9)) {
			console.log(`Ути какой молодчинка! Средняя оценка ${averageMarks}, средняя посещаемость ${averageVisits}.`);
		}

		if (((averageMarks < 9) && (averageVisits >= 0.9)) || ((averageMarks >= 9) && (averageVisits < 0.9))) {
			console.log(`Норм, но можно лучше! Средняя оценка ${averageMarks}, средняя посещаемость ${averageVisits}.`);
		}

		if ((averageMarks < 9) && (averageVisits < 0.9)) {
			console.log(`Редиска! Средняя оценка ${averageMarks}, средняя посещаемость ${averageVisits}.`);
		}
	}
}


const student1 = new Student('Artemii', 'K', 1998);
const student2 = new Student('Belka', 'Neon', 1998);


console.log(student1);
console.log(student1.age());
