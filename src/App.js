import './App.css';
import GoalList from './components/GoalList/GoalList';
import AddGoal from './components/AddGoal/AddGoal'
import React, { useState } from 'react';

function App() {

  const [goalList, setGoalList] = useState([]);


  const onAddGoalHandler = (newGoal) => {
    // setGoalList(goalList.concat(newGoal));
    setGoalList(previousGoals => goalList.concat(newGoal));

  };

  return (
    <div className='course-path' >
      <h2 >React Native Learning Path</h2>
      <AddGoal onAddGoal={onAddGoalHandler} />
      <GoalList goals={goalList} />
    </div>
  );
}

export default App;
