// import React from 'react';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            show : false,
        };
    }
    handleShow = () => {
        this.setState({show : !this.state.show});
    };
    handleChange = (event) => {
        this.setState = ({
            [event.target.name] : event.target.value,
        })
    }
    render() {
        return (
            <div className="Modal">
                <div>
                    <button onClick = {this.handleShow}>Add a new movie</button>
                </div>

                <Modal show ={this.state.show} >
                    <Modal.Header closeButton onHide ={this.handleShow}>
                    <Modal.Title>Add movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label className = 'input'>Title : </label>
                        <input type = 'text' name = 'name' onChange = {this.handleChange}></input>
                        <br/>
                        <label className = 'input'>Image URL :</label>
                        <input type = 'text' name = 'image' onChange = {this.handleChange}></input>
                        <br/>
                        <label className = 'input' name = 'description'>Description :</label>
                        <input type = 'text' onChange = {this.handleChange}></input>
                        <br/>
                        <label className = 'input' name = 'rating'>Rating :</label>
                        <input type = 'text' onChange = {this.handleChange}></input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Add</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
// function AddModal() {

    
  
  export default AddModal;