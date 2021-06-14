import React, { Component } from "react";
import StudentService from "../services/StudentService";

export default class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      details: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
  }

  componentDidMount() {
    if (this.state.id === '_add') {
      // add student page
      return;
    } else {
      // update student page
      StudentService.getStudentById(this.state.id).then((res) => {
        let student = res.data;
        this.setState({
          firstName: student.firstName,
          lastName: student.lastName,
          emailId: student.emailId,
          details: student.details,
        });
      });
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeDetailsHandler = (event) => {
    this.setState({ details: event.target.value });
  };

  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      details: this.state.details,
    };
    console.log("student => " + JSON.stringify(student));

    if (this.state.id === '_add') {
      StudentService.createStudent(student).then((res) => {
        this.props.history.push("/students");
      });
    } else {
      StudentService.updateStudent(student, this.state.id).then((res) => {
        this.props.history.push("/students");
      });
    }
  };

  cancel() {
    this.props.history.push("/students");
  }

  getTitle() {
      if (this.state.id === '_add'   ) {
          return <h3 className="text-center add-title"> Add Student </h3>;
      } else {
          return <h3 className="text-center update-title"> Update Student </h3>;
      }
  }
  render() {
    return (
        <div className="container add-update">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <i> first name </i>
                    <input
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <i> last name </i>
                    <input
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <i> email address </i>
                    <input
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <i> details </i>
                    <textarea
                      name="details"
                      className="form-control"
                      value={this.state.details}
                      onChange={this.changeDetailsHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateStudent}
                  >
                    {" "}
                    Save{" "}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
