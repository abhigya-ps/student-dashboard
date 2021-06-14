import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.viewStudent = this.viewStudent.bind(this);
    }

    componentDidMount() {
        
        // returns promise
        StudentService.getStudents().then(res => {
            this.setState({ students: res.data });
        });
    }

    addStudent() {
        this.props.history.push('/add-student/_add');
    }

    editStudent(id) {
        this.props.history.push(`/add-student/${id}`);    
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({students: this.state.students.filter(student => student.id != id)});
        }); 
    }

    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`);     
    }
    render() {
        return (
            <div>
                <div className="first-row">
                    <h3 className="text-center title-student-directory"> Student Directory </h3>
                    <button className="btn btn-primary" id="add" onClick={this.addStudent}> Add Student </button>
                </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Email Id </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr className="trow" key={student.id}>
                                        <td className="td"> {student.firstName} </td>
                                        <td> {student.lastName} </td>
                                        <td> {student.emailId} </td>
                                        <td>
                                            <button onClick={() => this.editStudent(student.id)} className="btn btn-success"> Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteStudent(student.id)} className="btn btn-danger"> Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewStudent(student.id)} className="btn btn-primary"> View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}
