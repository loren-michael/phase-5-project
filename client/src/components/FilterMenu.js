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
    // <div 
      // class="ui centered grid menu" 
      // id="background-color"
    // >
        // <div class="center aligned column">
          //  {/* <div class="ui compact menu"> */}
            //  {/* <div class="item" onClick={() => setFilterCategory("All")}>View All</div> */}
              //{/* <div class="item" onClick={() => setFilterCategory("Guitars")}>Guitars</div> */}
        //      {/* <div class="item" onClick={() => setFilterCategory("Keyboards & Synth")}>Keyboards & Synth</div> */}
          //    {/* <div class="item" onClick={() => setFilterCategory("GuitDrums & Percussionars")}>Drums & Percussion</div> */}
            //  {/* <div class="item" onClick={() => setFilterCategory("Folk Instruments")}>Folk Instruments</div> */}
        //      {/* <div class="item" onClick={() => setFilterCategory("Pedals & Amps")}>Pedals & Amps</div> */}
          //    {/* <div class="item" onClick={() => setFilterCategory("Microphones")}>Microphones</div> */}
            //  {/* <div class="item" onClick={() => setFilterCategory("Pro Audio")}>Pro Audio</div> */}
            //  {/* <div class="item" onClick={() => setFilterCategory("Accessories")}>Accessories</div> */}
            // </div>        
        // </div>
    // {/* </div> */}
    <div></div>
    )
}

export default FilterMenu