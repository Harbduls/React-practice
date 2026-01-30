import React from "react";
import { MoodBoardItem } from './MoodBoardItem';

export function MoodBoard(){
    return(
        <div className="top-level-container">
            <h1 className="mood-board-heading">
                Destination Mood Board
            </h1>
            <div className="mood-board">
                <MoodBoardItem
                    color="lightblue"
                    image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
                    description="A shore"
                />
                <MoodBoardItem
                    color="lightgreen"
                    image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
                    description="A grass"
                />
                <MoodBoardItem
                    color="lightgray"
                    image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
                    description="Santorini"
                />
            </div>
        </div>
    )
}
