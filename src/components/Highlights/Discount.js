import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 1,
    discountEnd:30
  }
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
  }, 30)
}
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
          onReveal ={()=> this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_discription">
              <h3>Purchase tickets befor 20th JUNE </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur blanditiis reiciendis corrupti. Dolorum, a! Tempore
                labore quos quod nisi, deleniti unde, neque accusamus itaque
                praesentium rerum odit provident! Autem, tenetur?
              </p>
              <MyButton
              text="Purchase tickets"
              bck="#ffa800"
              color="#ffffff"
              link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
