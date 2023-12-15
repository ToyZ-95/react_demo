import React, { useState } from "react";
import './AddGoal.css';

const AddGoal = (props) => {

    const [enteredText, setEnteredText] = useState("");

    const addGoalHandler = event => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText,
        };

        console.log(newGoal);

        props.onAddGoal(newGoal);

        setEnteredText("");

    }

    const onTextChangeHandler = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="add-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={onTextChangeHandler} />
            <span style={{ margin: 10 }} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddGoal;