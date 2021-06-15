class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of the computer!'
    const options = ['Thing One', 'Thing Two', 'Thing Three']
    return (
    
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
      
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Handle Pick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I pick?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('Remove All')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    if (option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form  onSubmit={this.handleAddOption}>
        <input name="option" type="text"></input>
        <button>Add Option</button>
        </form>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.optionText}</h3>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))