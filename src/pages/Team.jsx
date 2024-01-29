import React from 'react'

const ourTeam = () => {
  return (
    <section id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Our Team</h2>
          <p>Meet the dedicated professional students behind our success.</p>
        </div>
      </div>
      {/* New row for three blocks under "Our Team" */}
      <div className="row mt-5">
        <div className="col-lg-4 mb-4 text-center">
          <h3>Rawand Al-Mahasneh</h3>
          <p>Computer Engineering Student</p>
        </div>

        <div className="col-lg-4 mb-4 text-center">
          <h3>Rawan Taani</h3>
          <p>Computer Engineering Student</p>
        </div>

        <div className="col-lg-4 mb-4 text-center">
          <h3>Bayan Ali</h3>
          <p>Computer Engineering Student</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ourTeam