import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      poemText: []
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      poemText: event.target.value   
    }) 
    
    
  }

  valid() {
    var lines = this.state.value.split("\n")
    
    if (lines[0]) {
      
      var line1 = lines[0].trim()
      var words1 = line1.split(' ').length  
          
    }
    if (lines[1]) {
      var line2 = lines[1].trim()
      var words2 = line2.split(' ').length  
          
    }
    if (lines[2]) {
      var line3 = lines[2].trim()
      var words3 = line3.split(' ').length  
          
    }
    
    console.log('lines.length', lines.length)

    if (lines.length === 3 && (words1 ===5 && words2 === 3 && words3 === 5)) {
      return true
    
    } else if (this.state.value === '') {
        return false
    
    } else {
      return false
    
    }
    }
        
    
    
  

  render() {
    if (this.valid()) {
       return (     
        <div>
        <textarea 
          rows="3" 
          cols="60"      
          id="texta"     
          name="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />
        </div>
      )
    } else {
      return (
        <div>
        <textarea 
          rows="3" 
          cols="60"      
          id="texta"     
          name="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
      </div>
        )
    }
    
  }
}



export default PoemWriter