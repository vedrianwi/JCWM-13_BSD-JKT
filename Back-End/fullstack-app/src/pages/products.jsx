import React from 'react'
import { connect } from 'react-redux'
import { Table, Button, Form } from 'react-bootstrap'

import '../styles/product.css'

import { getProduct, addProduct, deleteProduct, editProduct } from '../actions'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex : null
        }
    }

    async componentDidMount () {
        this.props.getProduct()
    }

    handleAdd = () => {
        console.log('handle-add')
        console.log('refs', this.refs)
    
        const body = {
            name : this.refs.name.value,
            price : parseInt(this.refs.price.value),
            stock : parseInt(this.refs.stock.value)
        }
        this.props.addProduct(body)
    }
    
    handleDelete = (id) => {
        console.log('delete id : ', id)
        this.props.deleteProduct(id)
    }

    handleSave = (id) => {
        console.log('save id : ', id)

        // get data value
        const body = {
            name : this.refs.editname.value,
            price : parseInt(this.refs.editprice.value),
            stock : parseInt(this.refs.editstock.value)
        }
        this.props.editProduct(id, body)
        this.setState({ selectedIndex : null })
    }

    TableHead = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    TableBody = () => {
        return this.props.product.map((item, index) => {
            if (this.state.selectedIndex === index) {
                return  (
                    <tr key={item.id}>
                        <td>#</td>
                        <td>
                            <Form.Control 
                                type="text" 
                                placeholder="name" 
                                className="input"
                                ref="editname"
                            />
                        </td>
                        <td>
                            <Form.Control 
                                type="number" 
                                placeholder="price" 
                                className="input"
                                ref="editprice"
                            />
                        </td>
                        <td>
                            <Form.Control 
                                type="number" 
                                placeholder="stock" 
                                className="input"
                                ref="editstock"
                            />
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
                                onClick={() => this.setState({ selectedIndex : null })}
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
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>
                            <Button 
                                variant="warning" 
                                className="button"
                                onClick={ () => this.setState({ selectedIndex : index })}
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="danger" 
                                className="button"
                                onClick={ () => this.handleDelete(item.id) }
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
                        placeholder="name" 
                        className="input"
                        ref="name"
                    />
                </td>
                <td>
                    <Form.Control 
                        type="number" 
                        placeholder="price" 
                        className="input"
                        ref="price"
                    />
                </td>
                <td>
                    <Form.Control 
                        type="number" 
                        placeholder="stock" 
                        className="input"
                        ref="stock"
                    />
                </td>
                <td>
                    <Button 
                        variant="primary" 
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
        console.log('state : ', this.state)
        return (
            <div className="product-container">
                <h1 className="title">Product</h1>
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
        product : globalStore.product.data
    }
}

export default connect(mapStateToProps, { getProduct, addProduct, deleteProduct, editProduct })(Product)