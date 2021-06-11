class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision </h1>
        <h2>Put your life in the hands of the computer!</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I pick?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option/>
        <Option/>
        <Option/>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <h3>AddOption Component Here</h3>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        <h3>Option Component Here</h3>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))