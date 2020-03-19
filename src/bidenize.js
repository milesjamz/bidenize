import React from 'react';

function Bidenize (props) {
    const bidenize = string => {
        const pronouns = ['he','him','she','her','his','hers','I','you','it','they','my','mine','your','yours']
        const malaprops = ['Corn Pop','hey mack','look here, fat', 'hey, man, ','my son Beau']
        const endings = ["that's a story, man!"]
    
    
            const stutter = word => {
                thisWord = word.split('')
                thisWord.unshift(`${thisWord[0]}-${thisWord[0]}-`)
                return thisWord.join('')
            }
        myBidenism = string.split(' ')
        if (myBidenism.length <= 4) {
            const myMalaprop = malaprops[Math.floor(Math.random() * malaprops.length)]
            return myMalaprop + myBidenism[0,-2] + stutter(myBidenism[-1]).join(' ')
        }
    }

   return (
        <div className="div">


        </div>
   ) 
}

export default Bidenize