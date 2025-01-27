import React from 'react';

async function TaskPage() {
	const response = await fetch('http://localhost:3000/api/tasks');
	const tasks = await response.json();
	console.log('tasks', tasks);

	return <div>task page</div>;
}

export default TaskPage;
