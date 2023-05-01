import React from 'react'


const FilterMenu = ({ setFilterCategory }) => {

  function setFilter(e) {
    console.log(e.target.value)
    
    setFilterCategory(e.target.value)
  }

  return (
    // <div class="ui attached container menu">
    //   <div class="ui centered grid">
    //     <span class="item" onClick={e => setFilter(e)} value="All">View All</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Guitars">Guitars</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Keyboards & Synth">Keyboards & Synth</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Drums & Percussion">Drums & Percussion</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Folk Instruments">Folk Instruments</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Pedals & Amps">Pedals & Amps</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Microphones">Microphones</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Pro Audio">Pro Audio</span>
    //     <span class="item" onClick={e => setFilter(e)} value="Accessories">Accessories</span>
    //   </div>
    // </div>
    // <div class="ui centered grid menu" id="background-color">
    //     <div class="center aligned column">
    //         <div class="ui compact menu">
    //           <span class="item" onClick={e => console.log(e.target)} value="All">View All</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Guitars">Guitars</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Keyboards & Synth">Keyboards & Synth</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Drums & Percussion">Drums & Percussion</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Folk Instruments">Folk Instruments</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Pedals & Amps">Pedals & Amps</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Microphones">Microphones</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Pro Audio">Pro Audio</span>
    //           <span class="item" onClick={e => setFilterCategory(e.target.value)} value="Accessories">Accessories</span>
    //         </div>        
    //     </div>
    // </div>
    <div></div>
    )
}

export default FilterMenu