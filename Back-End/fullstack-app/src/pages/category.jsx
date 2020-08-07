import React from 'react'
import { connect } from 'react-redux'
import { Table, Button, Form } from 'react-bootstrap'

import '../styles/category.css'

import { getCategoryDetails, addCategory, deleteCategory, editCategory } from '../actions'

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex : null
        }
    }

    componentDidMount () {
        console.log('component did mount')
        this.props.getCategoryDetails()
    }

    handleAdd = () => {
        // get all value
        console.log('refs : ', this.refs)
        const body = {
            category : this.refs.category.value,
            parentId : this.refs.select.value
        }
        this.props.addCategory(body)
        this.refs.category.value = ''
        this.refs.select.value = ''
    }

    handleSave = (id) => {
        console.log('id : ', id)
        const body = {
            category : this.refs.categoryedit.value,
            parent_id : this.refs.selectedit.value
        }
        this.props.editCategory(id, body)
        this.setState({selectedIndex : null})
        this.refs.categoryedit.value = ''
        this.refs.selectedit.value = ''
    }

    handleDelete = (id) => {
        console.log('id : ', id)
        this.props.deleteCategory(id)
    }

    TableHead = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>Category</th>
                    <th>Parent</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    TableBody = () => {
        return this.props.category_details.map((item, index) => {
            if (this.state.selectedIndex === index) {
                return (
                    <tr>
                        <td>#</td>
                        <td>
                            <Form.Control 
                                type="text" 
                                className="input" 
                                placeholder="category" 
                                ref="categoryedit"
                            />
                        </td>
                        <td>
                            <Form.Control 
                                as="select" 
                                ref="selectedit"
                            >
                                <option value="">Choose category</option>
                                { 
                                    this.props.category_details.map((item, index) => {
                                        return <option key={item.id} value={item.id}>{item.category}</option>
                                    })
                                }
                            </Form.Control>
                        </td>
                        <td>
                            <Button 
                                variant="success" 
                                className="button"
                                onClick={() => this.handleSave(item.id)}
                            >
                                Save
                            </Button>
                            <Button 
                                variant="danger" 
                                className="button"
                                onClick={() => this.setState({selectedIndex : null})}
                            >
                                Cancel
                            </Button>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.category}</td>
                        <td>{item.parent}</td>
                        <td>
                            <Button 
                                variant="warning" 
                                className="button"
                                onClick={() => this.setState({selectedIndex : index})}
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="danger" 
                                className="button"
                                onClick={() => this.handleDelete(item.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                )
            }
        })
    }

    TableAdd = () => {
        return (
            <tr>
                <td>#</td>
                <td>
                    <Form.Control 
                        type="text" 
                        className="input" 
                        placeholder="category" 
                        ref="category"
                    />
                </td>
                <td>
                    <Form.Control 
                        as="select" 
                        ref="select"
                    >
                        <option value="">Choose category</option>
                        { 
                            this.props.category_details.map((item, index) => {
                                return <option key={item.id} value={item.id}>{item.category}</option>
                            })
                        }
                    </Form.Control>
                </td>
                <td>
                    <Button 
                        className="button"
                        onClick={this.handleAdd}
                    >
                        Add
                    </Button>
                </td>
            </tr>
        )
    }

    render () {
        return (
            <div className="category-container">
                <h1 className="title">Category</h1>
                <Table striped bordered hover size="sm" className="table">
                    {this.TableHead()}
                    <tbody>
                        {this.TableBody()}
                        {this.TableAdd()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (globalStore) => {
    return {
        category_details : globalStore.category.details,
    }
}

export default connect(mapStateToProps, { getCategoryDetails, addCategory, deleteCategory, editCategory })(Category)