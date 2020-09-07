import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="center">
                        <div className="icons">
                            <i class="asterisk loading big icon"></i>
                            <a href="https://github.com/jbaxter6" style={{color: 'black' }}> <i class="github large icon"></i> </a>
                            <a href="https://www.linkedin.com/in/johnnathan-baxter-6b7a61158/" style={{color: 'black'}}> <i class="linkedin large icon"></i> </a>
                            <i class="asterisk loading big icon"></i>
                        </div>
                        <div >
                            <a href="https://medium.com/@jbaxter6" class="foot-tag" > <h4>© HomeSweetHome est. 2020, created by Johnnathan Baxter </h4> </a>
                        </div>
                </div>
            </div>
        )
    }
}
