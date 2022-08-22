import React from 'react';

const StudentsList = ({ students, setSelectedStudent }) => {
	return (
		<div>
			{students.length > 0 ? (
				students.map((student) => {
					return (
						<div
							key={student._id}
							onClick={() => setSelectedStudent(student)}
							style={{ cursor: 'pointer' }}>
							<u>
								{student.firstname} {student.name}
							</u>
						</div>
					);
				})
			) : (
				<div>
					<i>Aucun résultat </i>
				</div>
			)}
		</div>
	);
};

export default StudentsList;
