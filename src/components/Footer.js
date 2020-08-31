import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="center">
                        <div className="icons">
                            <a href="https://github.com/jbaxter6" style={{color: 'black' }}> <i class="github icon"></i> </a>
                            <a href="https://www.linkedin.com/in/johnnathan-baxter-6b7a61158/" style={{color: 'black'}}> <i class="linkedin icon"></i> </a>
                        </div>
                        <div>
                            <a href="https://medium.com/@jbaxter6" style={{color:"black"}} > <p>© HomeSweetHome est. 2020, created by Johnnathan Baxter's </p> </a>
                        </div>
                </div>
            </div>
        )
    }
}
