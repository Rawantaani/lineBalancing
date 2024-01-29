import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12  mt-5 mb-5">
            <h2>About</h2>
            <p>Welcome to our line balancing heuristics software,We have carefully crafted and refined the algorithms to address
              line balancing challenges associated with ranked positional weights and the largest candidate rule.

              Furthermore, we have designed our software to be adaptable and scalable, with a roadmap to expand and
              incorporate additional heuristics in the future.

              By utilizing our software, you gain access to a powerful tool that enables you to make data-driven decisions
              and achieve optimal resource allocation.

            </p>
            <p>Now Let's start with some guidelines:
              After you create your account and login to the program, the home form screen will appear, which contains 2 buttons </p>
              <ol>
                <li>open:to show the previous projects you made.</li>
                <li>New :to create a new project.</li>
              </ol>


              if you click on the open button showing all the saved projects in the database, we can choose any project
              by inserting its ID to view project data .

              if you click on the new button the newForm screen will appear then you will insert
              <ol>
                <li>Number of tasks.</li>
                <li>Production volume representing the total quantity of products or units to be manufactured within a given time period.</li>
                <li>Line efficiency measures the level of permanence at each stage of the process.</li>
                <li>Unique ID</li>
              </ol>


              then you will select the way to insert the data
              <ol type='1'>
                <li>( Manuely by insert the time for each task and list the previous tasks that the current task depend on)</li>
                <li>( by Using Excel sheet)</li>
              </ol>
              <p><mark><strong>This is an example of an Excel sheet.</strong></mark></p>
              <img src='../src/img/ex.png'></img>
              <br></br>

              The final screen will compare the two methods :
              <ul>

                <li>Method Name(RPW,LCR)</li>
                <li> Number of work stations</li>
                <li> Balancing Efficiency</li>
                <li>Smoothing index (it indicates how close is the model to a perfect line balance).</li>
              </ul>


              <p> And show the results for each when you pressed on the RPW WorkStations Details OR  LCR WorkStation Details.</p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About