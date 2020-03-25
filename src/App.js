import React from 'react';
import './App.css';
// import Bidenize from './bidenize'

class App extends React.Component {

state = {
  form: '',
  bidenized: ''
}

handleOnChange = (e) => {
  console.log(e.target.value)
  this.setState({form: e.target.value})
}

handleOnSubmit = (e) => {
  const bidenSounds = ['./cornpop.mp3','./badboys.mp3']
  e.preventDefault()
  console.log(e.target.input.value)
  let result = this.bidenize(e.target.input.value)
  console.log(result)
  this.setState({bidenized: result})
  let jeez = new Audio(bidenSounds[Math.floor(Math.random() * bidenSounds.length)])
  jeez.play()
}

 bidenize = string => {
  const pronouns = ['he','him','she','her','his','hers','I','you','it','they','my','mine','your','yours', 'we']
  const malaprops = ['Corn Pop, ','Hey mack, ','Look here, fat, ', 'Hey, man, ','My son Beau... ', "Don’t play games with me, kid, "]
  const endings = ["... that's a story, man!", "... come on, man!", "... and we MUST DEFEAT DONALD TRUMP!", 
  "... my name’s Joe Biden. I’m a Democratic candidate for the United States Senate!"]
  const gaffeList = ["anybody who can throw coal into a furnace can learn how to program for god's sake,", 
  "go to Joe 3-0-3-3-0", "by the way, this is my little sister Valerie! And I’m Jill’s husband.", 
  "all men and women created by- go- you know- you know the thing.", "if you don't like me, you can vote for the other Biden.", 
  "play the radio, make sure the television — excuse me, make sure you have the record player on at night. … Make sure that kids hear words.",
  "poor kids are just as bright and just as talented as white kids.", "we choose science over fiction. We choose truth over facts,",
  "by the way, he gave me permission to touch him,"
]
  


      const stutter = word => {
        // --- adds stutter to selected word ---
          let thisWord = word.split('')
          thisWord.unshift(`${thisWord[0]}-${thisWord[0]}-`)
          return thisWord.join('')
      }

      const randomItem = (array) => {
        // --- selects random item from given array ---
        console.log(array)
        return array[Math.floor(Math.random() * array.length)]
      }

      const pronounSwitch = word => {
        // --- every so often, switch pronouns --- 
        let number = Math.floor((Math.random() * 10) + 1);
        return number >= 8 ? randomItem(pronouns) : word
      }

  // let numberCount = 
  let myBidenism = string.split(' ')
  // --- for short quips, do the following ---
  if (myBidenism.length <= 7 && myBidenism.length > 1) {
      myBidenism[0][0].toLowerCase() !== 'i' ? 
      myBidenism[0] = myBidenism[0].toLowerCase() : console.log('hehe')
      myBidenism = myBidenism.map(word => pronouns.includes(word.toLowerCase()) ? pronounSwitch(word) : word )
      myBidenism = myBidenism.map(word => word.match(/\d/g) ? word = word * Math.floor(Math.random() * 10) + 1 : word)
      myBidenism.splice(Math.floor(Math.random() * myBidenism.length), 0, randomItem(gaffeList))
      let lastWord = myBidenism[myBidenism.length-1]
      let finishedIsm = randomItem(malaprops) + myBidenism.slice(0,-1).join(' ') + " " + stutter(lastWord) + randomItem(endings);
      return finishedIsm
    }
}

playJamz = () => {
let pEyes = new Audio('./PrivateEyes.mp3')
console.log(pEyes)
pEyes.play()
}


render() {

const heresTheBidenism = () => {
  if (this.state.bidenized) {
    return <div>
      <span id="arrow">===></span> {this.state.bidenized}
    </div>
  }
}

  return (
    <div className="bidenForm">
      <h2>- / = b i d e n i z e = \ -</h2>
      <button onClick={this.playJamz}>Play our theme song, "Bidenize"</button><br/>
      please enter a phrase to bidenize:
    <form onSubmit={this.handleOnSubmit}>
    <input  type='text'
            name='input' 
            value={this.state.form}
            onChange={this.handleOnChange}
            autoComplete='off'
            /><br />
    <input type='submit'
           value='Bidenize!' />
    </form>
    <br />
    <span id='charsLeft'>Characters left - {140 - this.state.form.length}</span>
  <br /><br />
    When you've submitted your phrase, ol' uncle Joe will translate it down here -<br /><br />
      <div className='bidenResult'>
      {heresTheBidenism()}
      </div>
    </div>
    );
  }
}

export default App;
