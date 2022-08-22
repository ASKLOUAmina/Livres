import React, { useState } from 'react';
import StudentField from './StudentField';
import Button from 'react-bootstrap/Button';

const StudentDetails = ({ student, removeStudent, hideDetails }) => {
	function changeValue(field, value) {
		student[field] = value;
		console.log(value);
	}
	return (
		<div>
			<hr />
			<h2>Détail de l'étudiant : </h2>
			<StudentField
				label={'Nom'}
				field='name'
				value={student.name}
				onChange={changeValue}
			/>
			<StudentField
				label={'Prénom'}
				field='firstname'
				value={student.firstname}
				onChange={changeValue}
			/>
			<StudentField
				label={'Age'}
				field='age'
				value={student.age}
				onChange={changeValue}
			/>
			<StudentField label={'Promotion'} value={student.promotion} />
			<Button variant='secondary' size='sm' onClick={() => hideDetails()}>
				Masquer les détails
			</Button>
			<Button
				variant='danger'
				size='sm'
				onClick={() => removeStudent(student._id)}>
				Supprimer cet étudiant
			</Button>
		</div>
	);
};

export default StudentDetails;
