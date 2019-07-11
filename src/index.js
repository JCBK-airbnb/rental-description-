import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionMainContainer from './components/DescriptionMainContainer.jsx';
import $ from 'jquery';

class Index extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  };
  

  componentDidMount() {
    $.get("http://localhost:3000/getData", (data) => {
      console.log(data[0])
      this.setState({rentalData: data[0]})
    })
  }

  render(){
    return (
      <div>

        <DescriptionMainContainer RentalData={this.state}/>

      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('like_button_container') )