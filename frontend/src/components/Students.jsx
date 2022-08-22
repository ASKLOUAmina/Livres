import React, { useState } from 'react';
import { students as studentsMock } from '../mocks/students.mock.js';
import StudentDetails from './StudentDetails.jsx';
import StudentsList from './StudentsList';

const search = (query, students) => {
	if (query === '') {
		return students;
	}
	return students.filter((student) => {
		return (
			student.firstname.toLowerCase().includes(query.toLowerCase()) ||
			student.name.toLowerCase().includes(query.toLowerCase())
		);
	});
};

const Students = ({ query }) => {
	const [students, setStudents] = useState(studentsMock);

	const [selectedStudent, setSelectedStudent] = useState();

	const removeStudent = (studentId) => {
		const indexToRemove = students.findIndex(
			(student) => student._id === studentId
		);
		students.splice(indexToRemove, 1);
		setSelectedStudent(undefined);
	};

	const hideDetails = () => {
		setSelectedStudent(undefined);
	};

	return (
		<div>
			<StudentsList
				students={search(query, students)}
				setSelectedStudent={setSelectedStudent}
			/>
			{selectedStudent && (
				<StudentDetails
					student={selectedStudent}
					removeStudent={removeStudent}
					hideDetails={hideDetails}
				/>
			)}
		</div>
	);
};

export default Students;
