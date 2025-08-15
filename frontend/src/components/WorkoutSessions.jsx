import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Boost your energy with high-powered gym sessions designed to enhance
          strength, endurance, and overall fitness.
        </p>
        <img src="public/gym9.jpeg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Explore our most popular gym bootcamps tailored for every fitness goal.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              Burn fat fast with short, intense workouts and quick recovery breaks.
            </p>
          </div>
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Build muscle and power through guided weightlifting exercises.
            </p>
          </div>
          <div>
            <h4>Beginner Bootcamp</h4>
            <p>
              Start your fitness journey with easy, low-impact workout routines.
            </p>
          </div>
          <div>
            <h4>Endurance Bootcamp</h4>
            <p>
              Boost stamina with long cardio sessions and strength-based drills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
