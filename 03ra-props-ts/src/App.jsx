import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile';
import UserCard from './components/UserCard';
import Button from './components/ButtonProps'
import { ToDoList } from './components/ToDoList';
import { DynamicToDoList } from './components/DynamicToDoList'

function App() {
  const user = {
    name: 'Vasya',
    status: 'React Developer',
    avatar: 'https://dummyimage.com/200x100',
  };

  const toDo = [
    {id: '1', title: 'дело 1', done: true},
    {id: '2', title: 'дело 2'},
    {id: '3', title: 'дело 3', done: false},
  ]

  const handleClick = () => console.log('Карточка нажата');

  return (
    <>
      <DynamicToDoList tasks={toDo}/>
      <ToDoList tasks={toDo}/>
      <UserProfile user={user} />

      <UserCard 
        name="Иван"
        age={25}
        isActive={true}
        hobbies={['React', 'TypeScript', 'Node.js']}
        onClick={handleClick}
      />

      <Button label='Send' primary large />
    </>
  );
}

export default App
