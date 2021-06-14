import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"> designed by <a href="https://github.com/abhigya-ps"> @abhigya </a> & orignially by <a href="https://www.javaguides.net/2020/07/spring-boot-react-js-crud-example-tutorial.html"> @javaguides </a></span>
                </footer>
            </div>
        )
    }
}
