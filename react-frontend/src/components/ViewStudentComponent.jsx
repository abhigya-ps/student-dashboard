import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then(res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
                <div className="card col-md-6 offset-md-3 view">
                    <h3 className="text-center view-title"> Student Details </h3>
                    <div className="card-body">
                        <div className= "row">
                            <i> first name </i>
                            <div> { this.state.student.firstName } </div>
                        </div>
                        <div className= "row">
                            <i> last name </i>
                            <div> { this.state.student.lastName } </div>
                        </div>
                        <div className= "row">
                            <i> email address </i>
                            <div> { this.state.student.emailId } </div>
                        </div>
                        <div className= "row">
                            <i> details </i>
                            <div> { this.state.student.details } </div>
                        </div>
                    </div>
                </div>
        )
    }
}
