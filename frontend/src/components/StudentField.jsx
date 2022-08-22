import React, { useState } from 'react';
import {
	AiOutlineEdit,
	AiOutlineCheck,
	AiFillCloseCircle,
} from 'react-icons/ai';

const StudentField = ({ label, value, onChange, field }) => {
	// create reducer to validate input and cancel

	const [editing, setEditing] = useState(false);
	const [newValue, setNewValue] = useState(value);
	const validate = () => {
		onChange(field, newValue);

		setEditing(false);
	};

	const cancel = () => {
		setEditing(false);
		setNewValue(value);
	};

	return (
		<>
			{editing ? (
				<div>
					<input
						type='text'
						placeholder={value}
						value={newValue}
						onChange={(e) => setNewValue(e.target.value)}
					/>
					<AiOutlineCheck onClick={() => validate()} />
					<AiFillCloseCircle onClick={() => cancel()} />
				</div>
			) : (
				<div>
					<label>
						<b>{label} : </b>
					</label>
					{value}
					{label !== 'Promotion' && (
						<AiOutlineEdit onClick={() => setEditing(true)} />
					)}
				</div>
			)}
		</>
	);
};

export default StudentField;
