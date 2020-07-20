import React from 'react'
import { 
    Form, 
    FormGroup, 
    Input, 
    Label, 
    UncontrolledButtonDropdown, 
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
            database : [],
            gender : ''
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
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
        )
    }

    tableBody = () => {
        return this.state.database.map(item => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                </tr>
            )
        })
    }

    render () {
        console.log(this.state.gender)
        console.log(this.state.database)
        return (
            <div>
                <h3>Form Application</h3>
                {/* <input ref='contoh' type='text' placeholder='example'/> */}
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
                        <UncontrolledButtonDropdown >
                            <DropdownToggle caret>
                                {this.state.gender ? this.state.gender : 'Choose...'}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => this.setState({gender : 'Male'})}>Male</DropdownItem>
                                <DropdownItem onClick={() => this.setState({gender : 'Female'})}>Female</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </FormGroup>
                    <FormGroup>
                        <Button color='warning' onClick={this.handleSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
                <Table>
                    {this.tableHead()}
                    <tbody>{this.tableBody()}</tbody>
                    <TableBody database={this.state.database}/>
                </Table>
            </div>
        )
    }
}

function Col (props) {
    return <td>{props.item}</td>
}

function Row (props) {
    let row = []
    for (let key in props.items) {
        row.push(<Col item={props.items[key]}/>)
    }
    return row
}

function TableBody (props) {
    return <tbody>{props.database.map(data => <Row items={data}/>)}</tbody>
}

export default FormApp


// // curl bracket {JS Expression}
// var a = 'hai'
// var arr = [0, 2, 4]
// arr[1]

// // text fromating backtic and dolar
// 'string basic arr[1]'
// `string bacic ${arr[1]}`

// <div>textd {arr[1]}</div>
// setState()

// object.properties or object['properties']
// () => lalal