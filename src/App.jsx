import React from 'react'
import { useState } from 'react'
import Home from './components/Home'
import AllPlayers from './components/AllPlayers'
import NewForm from './components/NewForm'
import { Routes, Route, Link } from 'react-router-dom'
// import SinglePlayer from './components/SinglePlayer'


export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null) // i had this state here ,., and then I put the routes

  return (
    <>
  
        <h1>Puppy Bowl 2023</h1>

        <div className="navBar">
          <Link to="/">Home</Link>
          <Link to="/allPlayers">Our Puppy Contenders</Link>
          <Link to="/newForm">Add a new player</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allPlayers" element={<AllPlayers setSelectedPlayer={setSelectedPlayer} />} /> 
        <Route path="/newForm" element={<NewForm />} />
    </Routes>
   </>
  )
}



 {/* {and here i had a ternary here and it worked } */}
    {/*Maybe the error is gone now ,,..,

    - so its gone now but it still doesn't show selected players info. theres like no error 
    
    that makes sense. all we did was add a player to the selectPlayer state but we didn't do anything with it yet
     
    - is line 22 what you did ?
    
    yeah, im trying to think of the best way to do this. i haven't done the router part yet so i need a refresher but 
    I think something like

    {selectPlayer === null ? 
      (
        <AllPlayers setSelectedPlayer={setSelectedPlayer}
      ):(

        <SinglePlayer player={selectedPlayer} setSelectedPlayer={setSelectedPlayer} 
      )
    
    }

   

    awww i see yess i had something similar but maybe yours will work. I just didnt know where to put it, 
    i use to have here on App.jsx.
    
    To be honest Im not sure the best place to put it. I kind of think maybe making another component 

    - maybe like SelectedPlayer or something but see thats what i thought my SinglePlayer was 
    
    Im still thinkin over it, i think maybe my idea is actually unnecessary but I have to review react-router a bit to
    understand the best way to incorporate it
    
    - awww okay well thank you for helping still. yeah still trying to wrap my head around this 
    
    i'll be back within an hour if you're still working on it. I'll read over the doc and also grab something to eat but happy to help anytime

    okay cool thank you. ,. yeah ill probably still be here if i dont fall asleep kinda tired

    if you have a repo I'll clone it later and work it out myself then I can send it to you tonight

    soooo I have it set to private cause theres this guy in my class who i think copies my work,., so 
    i had to ask but can you clone it now and then i can set it back to private ?
    
    oh I bet he does I think a couple people have been doing that. I can copy and paste everything from here but if you made it public I'll be quick

    okay ima change it now. and dammm really crazy 

    okay its public 

    https://github.com/Davonne007-TX/Block-29-Putting-It-All-Together

    okay got it, i'll work on it 

    later this evening and I'll let you know in a bit

    k cool. so i can set it back to private it wont effect you cause you already cloned it ? 

    should be fine it wont affect my local files but I don't think i can do a commit or push not that that matters really

    aw okay then sounds good. 
    
    iight cool ttyl then 

    ttyl


    */}





