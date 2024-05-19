import React, { useState, ChangeEvent } from 'react';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Code', completed: false },
    { id: 2, name: 'Quét nhà', completed: false },
    { id: 3, name: 'Giặt quần áo', completed: false },
    { id: 4, name: 'Lau nhà', completed: false },
  ]);

  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = (): void => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTask = (id: number): void => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleEditTask = (id: number, newName: string): void => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, name: newName } : task
    ));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-container">
      <h2>Danh sách công việc</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={newTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Thêm</button>
      </div>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span
              contentEditable
              onBlur={(e) => handleEditTask(task.id, e.target.innerText)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.name}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>&#128465;</button>
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        Công việc đã hoàn thành: {completedCount} / {tasks.length}
      </div>
    </div>
  );
};

export default ToDo;
