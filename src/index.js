//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
const timeOfDay = new Date(8, 20, 2025, 16, 34).getHours();
let greeting = "Good evening";
let theColor = { color: "blue" };

if (timeOfDay >= 6 && timeOfDay < 12) {
  greeting = "Good morning";
  theColor = { color: "red" };
} else if (timeOfDay >= 12 && timeOfDay <= 18) {
  greeting = "Good afternoon";
  theColor = { color: "green" };
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={theColor}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
