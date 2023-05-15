import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div class="container">
          <div class="row">
            <div class="col">
              <h4>About Us</h4>
              <p>We are a company that specializes in...</p>
            </div>
            <div class="col">
              <h4>Contact Us</h4>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div class="col">
              <h4>Follow Us</h4>
              <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    )
  }
}