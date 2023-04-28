import React from 'react'


const FilterMenu = ({ setFilterCategory }) => {

  return (
    // <div className="filter-menu">
    //   <span className="category" onClick={setFilterCategory("All")}>View All</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Guitars</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Keyboards & Synth</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Drums & Percussion</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Folk Instruments</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Pedals & Amps</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Microphones</span>
    //   <span className="category" onClick={e => setFilterCategory(e.target.value)}>Pro Audio</span>
    //   <span className="category-last" onClick={e => setFilterCategory(e.target.value)}>Accessories</span>
    // </div>

    <div class="fluid ui buttons">
      <button class="ui big button">View All</button>
      <button class="ui big button">Guitars</button>
      <button class="ui big button">Keyboards & Synth</button>
      <button class="ui big button">Drums & Percussion</button>
      <button class="ui big button">Folk Instruments</button>
      <button class="ui big button">Pedals & Amps</button>
      <button class="ui big button">Microphones</button>
      <button class="ui big button">Pro Audio</button>
      <button class="ui big button">Accessories</button>
    </div>
  )
}

export default FilterMenu