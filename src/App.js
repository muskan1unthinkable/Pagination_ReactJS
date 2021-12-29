import "./App.css";
import React, { Component } from "react";
import getData from "./Data";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      data: getData(),
      currPage: 1,
    };
  }
  handleChange = (e) => {
    this.setState({
      limit: e.target.value,
      currPage: 1,
    });
  };

  prevPage = () => {
    if (this.state.currPage > 1)
      this.setState({ currPage: this.state.currPage - 1 });
  };

  nextPage = () => {
    if (this.state.currPage < this.state.data.length / this.state.limit)
      this.setState({ currPage: this.state.currPage + 1 });
  };
  lastPage = () => {
    this.setState({ currPage: this.state.data.length / this.state.limit });
  };

  firstPage = () => {
    if (this.state.currPage > 1) {
      this.setState({ currPage: 1 });
    }
  };

  render() {
    let { limit, data, currPage } = this.state;
    let filteredArray = [];
    filteredArray = data;
    let l = (currPage - 1) * limit;
    let h = l + limit;
    filteredArray = data.slice(l, h);
    // console.log(filteredArray);
    // console.log(limit)
    // console.log(data)
    // console.log(currPage);
    // console.log(l)
    // console.log(h)

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>RollNo</td>
              <td>Name</td>
              <td>Emailid</td>
            </tr>
          </thead>
          <Body filteredArray={filteredArray} />
          <Footer
            stateData={this.state}
            firstPage={this.firstPage}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            lastPage={this.lastPage}
            handleChange={this.handleChange}
          />
        </table>
      </div>
    );
  }
}
