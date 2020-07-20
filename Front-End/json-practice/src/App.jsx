import React from 'react'
import Axios from 'axios'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableSortLabel,
    InputBase,
    IconButton,
    TextField,
    Button
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import CreateIcon from '@material-ui/icons/Create'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'

import './app.css'

const URL = 'http://localhost:2000'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users : [],
            firstNameOrder : false,
            error : [false, false, false],
            errorEdit : [false, false, false],
            selectedId : null,
            defaultValue : {}
        }
    }

    componentDidMount () {
        this.getDataFromAPI('/users')
    }

    getDataFromAPI = (query) => {
        Axios.get(URL + query)
        .then(response => this.setState({users : response.data}))
        .catch(error => console.log(error))
    }

    handelSort = (label) => {
        const { firstNameOrder } = this.state // object destructuring
        this.getDataFromAPI(`/users?_sort=${label}&_order=${firstNameOrder ? 'desc' : 'asc'}`)
        this.setState({firstNameOrder : !firstNameOrder})
    }

    handleSearch = (e) => {
        this.getDataFromAPI(`/users?q=${e.target.value}`)
    }

    handleDelete = (id) => {
        console.log(id)
        Axios.delete(URL + `/users/${id}`)
        .then(response => {
            console.log(response.data)
            this.getDataFromAPI('/users')
        })
        .catch(error => console.log(error))
    }

    handleAdd = () => {
        let first_name = this.firstName.value
        let last_name = this.lastName.value
        let email = this.email.value

        // if (first_name === '' || last_name === '' || email === '') {
        //     let tempError = [
        //         first_name ? false : true,
        //         last_name ? false : true,
        //         email ? false : true
        //     ]
        //     this.setState({error : tempError})
        //     return
        // }
        let inputError = this.inputValidation(first_name, last_name, email)
        if (inputError.includes(true)) {
            this.setState({error : inputError})
            return
        }

        Axios.post(URL + `/users`, { first_name, last_name, email })
        .then(response => {
            console.log(response.data)
            this.getDataFromAPI('/users')
            
            this.firstName.value = ''
            this.lastName.value = ''
            this.email.value = ''
            this.setState({error : [false, false, false]})
        })
        .catch(error => console.log(error))
    }

    inputValidation = (fisrtName, lastName, email) => {
        // email
        let firstNameError = fisrtName ? false : true
        let lastNameError = lastName ? false : true
        let emailError = email ? false : true

        if (firstNameError || lastNameError || emailError) {
            return [firstNameError, lastNameError, emailError]
        }

        // check include @ and '.'
        if (!email.includes('@') || !email.includes('.')) {
            console.log('check @')
            return [firstNameError, lastNameError, true]
        }

        // check @ and "." is single
        if (email.split('@') > 2 || email.split('.') > 2) {
            console.log('check single @')
            return [firstNameError, lastNameError, true]
        }

        // check if indexOf @ is smaller than "."
        let at = email.indexOf('@')
        let dot = email.indexOf('.')
        if (at > dot || at - dot === 1) {
            console.log('check at and dot')
            return [firstNameError, lastNameError, true]
        }

        return [false, false, false]
    }

    handleEdit = (item) => {
        let value = {
            first_name : item.first_name,
            last_name : item.last_name,
            email : item.email
        }
        this.setState({selectedId : item.id, defaultValue : value})
    }

    handleCancel = () => {
        this.setState({selectedId : null, defaultValue :{}})
    }

    
    handleSave = () => {
        console.log('hanlde save')
        let first_name = this.editFirstName.value
        let last_name = this.editLastName.value
        let email = this.editEmail.value
        console.log(email)

        let inputEditError = this.inputValidation(first_name, last_name, email)
        if (inputEditError.includes(true)) {
            this.setState({errorEdit : inputEditError})
            return
        }

        Axios.put(URL + `/users/${this.state.selectedId}`, {first_name, last_name, email})
        .then(response => {
            console.log(response.data)
            this.getDataFromAPI('/users')
            this.setState({defaulValue : {}, selectedId : null})
        })
        .catch(error => console.log(error))

    }
    renderTableHead = () => {
        const { firstNameOrder } = this.state
        return (
            <TableHead>
                <TableRow>
                    <TableCell>
                        No
                    </TableCell>
                    <TableCell>
                        First Name
                        <TableSortLabel 
                            active = {false} 
                            direction={firstNameOrder ? 'desc' : 'asc'} 
                            onClick={() => this.handelSort('first_name')}
                        />
                    </TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    renderTableBody = () => {
        const { selectedId, errorEdit, defaultValue } = this.state
        return this.state.users.map((item, index) => {
            if (selectedId === item.id) {
                return (
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>
                            <TextField 
                                label="first name" 
                                variant="outlined" 
                                inputRef={(editFirstName) => this.editFirstName = editFirstName}
                                helperText={errorEdit[0] ? '*required' : null}
                                error={errorEdit[0]}
                                defaultValue={defaultValue.first_name}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField 
                                label="last name" 
                                variant="outlined" 
                                inputRef={(editLastName) => this.editLastName = editLastName}
                                helperText={errorEdit[1] ? '*required' : null}
                                error={errorEdit[1]}
                                defaultValue={defaultValue.last_name}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField 
                                label="email" 
                                variant="outlined" 
                                inputRef={(editEmail) => this.editEmail = editEmail}
                                helperText={errorEdit[2] ? '*required and include @domain.com' : null}
                                error={errorEdit[2]}
                                defaultValue={defaultValue.email}
                            />
                        </TableCell>
                        <TableCell>
                            <IconButton color="secondary" onClick={this.handleSave}>
                                <CheckIcon/>
                            </IconButton>
                            <IconButton onClick={this.handleCancel}>
                                <ClearIcon style={{color : '#0984e3'}}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                )
            } else {
                return (
                    <TableRow key={item.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.first_name}</TableCell>
                        <TableCell>{item.last_name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>
                            <IconButton color="secondary" onClick={() => this.handleDelete(item.id)}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton onClick={() => this.handleEdit(item)}>
                                <CreateIcon style={{color : '#0984e3'}}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                )
            }
        })
    }

    renderAddRow = () => {
        const { error } = this.state
        return (
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell>
                    <TextField 
                        label="first name" 
                        variant="outlined" 
                        inputRef={(firstName) => this.firstName = firstName}
                        helperText={error[0] ? '*required' : null}
                        error={error[0]}
                    />
                </TableCell>
                <TableCell>
                    <TextField 
                        label="last name" 
                        variant="outlined" 
                        inputRef={(lastName) => this.lastName = lastName}
                        helperText={error[1] ? '*required' : null}
                        error={error[1]}
                    />
                </TableCell>
                <TableCell>
                    <TextField 
                        label="email" 
                        variant="outlined" 
                        inputRef={(email) => this.email = email}
                        helperText={error[2] ? '*required and include @domain.com' : null}
                        error={error[2]}
                    />
                </TableCell>
                <TableCell>
                    <Button 
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon/>}
                        onClick={this.handleAdd}
                    >
                        Add
                    </Button>
                </TableCell>
            </TableRow>
        )
    }

    render () {
        console.log(this.state.defaultValue)
        return (
            <div style={{textAlign : "center", margin : '3% 5%'}}>
                <h1>JSON-Practice</h1>
                <div id="menu">
                    <div id="search">
                        <div>
                            <SearchIcon/>
                        </div>
                        <InputBase 
                            style={{width : '100%'}} 
                            placeholder="search..."
                            onChange={(e) => this.handleSearch(e)}
                        />
                    </div>
                </div>
                <Table>
                    {this.renderTableHead()}
                    <TableBody>
                        {this.renderTableBody()}
                        {this.renderAddRow()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default App