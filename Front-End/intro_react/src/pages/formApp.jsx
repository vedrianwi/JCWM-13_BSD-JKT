import React from 'react'
import { 
    Form, 
    FormGroup, 
    Input, 
    Label, 
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem, 
    Button,
    Table
} from 'reactstrap'

class FormApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            database : [
                {
                    name : 'alee',
                    age : 19,
                    gender : 'Male'
                },
                {
                    name : 'eli',
                    age : 16,
                    gender : 'Female'
                }
            ],
            gender : '',
            editGender : '',
            selectedIndex : null
        }
    }

    handleSubmit = () => {
        let temp = this.state.database
        temp.push({
            name : this.fullName.value,
            age : this.age.value,
            gender : this.state.gender
        })
        this.setState({ database : temp })
    }

    tableHead = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    tableBody = () => {
        return this.state.database.map((item, index) => {
            if (this.state.selectedIndex === index) {
                return (
                    <tr>
                        <td>#</td>
                        <td>
                            <Input type='text' placeholder='full name' id='name' innerRef={(editName) => this.editName = editName}/>
                        </td>
                        <td>
                            <Input type='number' placeholder='age' id='age' innerRef={(editAge) => this.editAge = editAge}/>
                        </td>
                        <td>
                            <UncontrolledDropdown >
                                <DropdownToggle caret>
                                    {this.state.editGender ? this.state.editGender : 'Choose...'}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.setState({editGender : 'Male'})}>Male</DropdownItem>
                                    <DropdownItem onClick={() => this.setState({editGender : 'Female'})}>Female</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>
                        <td>
                            <Button color='primary' onClick={() => this.handleSave(index)}>Save</Button>
                            <Button color='primary' onClick={() => this.setState({selectedIndex : null, editGender : ''})}>Cancel</Button>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>
                            <Button color='primary' onClick={() => this.setState({selectedIndex : index})}>Edit</Button>
                            <Button color='primary' onClick={() => this.handleDelete(index)}>Delete</Button>
                        </td>
                    </tr>
                )
            }
        })
    }

    handleDelete = (index) => {
        let temp = this.state.database
        temp.splice(index, 1)
        this.setState({ database : temp })
    }

    handleSave = (index) => {
        if (this.editName.value === '' || this.editAge.value === '' || this.state.editGender === '') {
            return this.setState({editGender : '', selectedIndex : null})
        }
        
        let temp = this.state.database
        temp[index] = {
            name : this.editName.value,
            age : this.editAge.value,
            gender : this.state.editGender
        }
        this.setState({ database : temp , editGender : '', selectedIndex : null})
    }

    render () {
        console.log(this.state.selectedIndex)
        return (
            <div>
                <h3>Form Application</h3>
                <Form>
                    <FormGroup>
                        <Label for='name'>Full name</Label>
                        <Input type='text' placeholder='full name' id='name' innerRef={(fullName) => this.fullName = fullName}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='age'>Age</Label>
                        <Input type='number' placeholder='age' id='age' innerRef={(age) => this.age = age}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='gender'>Gender</Label>
                        <UncontrolledDropdown >
                            <DropdownToggle caret>
                                {this.state.gender ? this.state.gender : 'Choose...'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => this.setState({gender : 'Male'})}>Male</DropdownItem>
                                <DropdownItem onClick={() => this.setState({gender : 'Female'})}>Female</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </FormGroup>
                    <FormGroup>
                        <Button color='warning' onClick={this.handleSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
                <Table>
                    {this.tableHead()}
                    <tbody>{this.tableBody()}</tbody>
                </Table>
            </div>
        )
    }
}

export default FormApp