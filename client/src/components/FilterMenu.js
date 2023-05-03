import React from 'react'


const FilterMenu = ({ setFilterCategory }) => {


  return (
    <div class="flex flex-wrap justify-center">
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("All")} >View All</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Guitars")} >Guitars</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Keyboards & Synth")} >Keyboards & Synth</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Drums & Percussion")} >Drums & Percussion</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Folk Instruments")} >Folk Instruments</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Pedals & Amps")} >Pedals & Amps</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Microphones")} >Microphones</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Pro Audio")} >Pro Audio</button>
        <button class="font-sans font-semibold" onClick={() => setFilterCategory("Accessories")} >Accessories</button>
    </div>
    // <div 
      // class="ui centered grid menu" 
      // id="background-color"
    // >
        // <div class="center aligned column">
        //   <div class="ui compact menu">
        //     <div class="item" onClick={() => setFilterCategory("All")}>View All</div>
        //     <div class="item" onClick={() => setFilterCategory("Guitars")}>Guitars</div>
        //     <div class="item" onClick={() => setFilterCategory("Keyboards & Synth")}>Keyboards & Synth</div>
        //     <div class="item" onClick={() => setFilterCategory("GuitDrums & Percussionars")}>Drums & Percussion</div>
        //     <div class="item" onClick={() => setFilterCategory("Folk Instruments")}>Folk Instruments</div>
        //     <div class="item" onClick={() => setFilterCategory("Pedals & Amps")}>Pedals & Amps</div>
        //     <div class="item" onClick={() => setFilterCategory("Microphones")}>Microphones</div>
        //     <div class="item" onClick={() => setFilterCategory("Pro Audio")}>Pro Audio</div>
        //     <div class="item" onClick={() => setFilterCategory("Accessories")}>Accessories</div>
        //   </div>        
        // </div>
    // {/* </div> */}
    // <div></div>
    )
}

export default FilterMenu