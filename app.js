let students = [];
function addStudent(id,name,marks){
	let student = {
		id:id,
		name:name,
		marks:marks
	};
	students.push(student);
}

function display(id,name,marks){
	for(let i=0;i<students.length;i++){
		console.log(students[i]);
	}
}

function searchStudent(id){
	for(let i=0;i<students.length;i++){
		if(students[i].id === id){
			console.log("Student is Found");
			console.log(students[i]);
			return;
		}
	}
	console.log("Student not found");
}

function deleteStudent(id){
	for(let i=1;i<students.length;i++){
		if(students[i].id === id){
			students.splice(i,1);
			console.log("Student is deleted");
			return;
		}
	}
	console.log("Student Not Found");
}

function CalculateAverage(){
	let total=0;
	for(let i=0;i<students.length;i++){
		total+=students[i].marks
	}
	let Average=total/students.length;
	console.log("Average Marks ",Average);
}

function FindMin(){
	let min =students[0];
	for(let i=1;i<students.length;i++){
		if(students[i].marks < min.marks){
			min=students[i];
		}
	}
	
	console.log("Lowest Marks Student :");
	console.log(min);
}

function FindMax(){
	let max = students[0];
	for(let i=1;i<students.length;i++){
		if(students[i].marks > max.marks){
			max = students[i];
		} 
	}
	console.log("Highest Marks Student: ");
	console.log(max);
}

addStudent(1,"Saad", 78);
addStudent(2,"Maaz", 87);
addStudent(3,"Sohail",55);

display();

searchStudent(2);

CalculateAverage();

FindMax();

FindMin();

deleteStudent(3);

display();
