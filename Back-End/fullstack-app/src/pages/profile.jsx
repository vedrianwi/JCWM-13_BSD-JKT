import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

import '../styles/profile.css'
import avatar from '../assets/no-profile.jpg'

import { getProfile, URL_IMG, editProfile, upload } from '../actions'

class Profile extends React.Component {
    constructor(porps) {
        super(porps) 
        this.state = {
            edit : false,
            image : null
        }
    }

    componentDidMount () {
        this.props.getProfile()
    }

    handleSave = () => {
        console.log(this.refs)
        const body = {
            address : this.refs.address.value,
            phone : this.refs.phone.value,
            gender : this.refs.gender.value
        }
        this.props.editProfile(body)
        this.setState({ edit : false })
    }

    handleChoose = (e) => {
        console.log('event : ', e.target.files)
        this.setState({ image : e.target.files[0]})
    }

    handleUpload = async () => {
        console.log('image : ', this.state.image)

        // create formdata
        const data = new FormData()
        data.append('IMG', this.state.image)
        // data.append('filename', 'gambar profile')
        console.log('form data : ', data.get('IMG'))

        // // create request
        // const option = {
        //     headers : { 'Content-Type' : 'multipart/form-data' }
        // }

        // try {
        //     const res = await Axios.post(URL + '/profile/upload/' + localStorage.getItem('id'), data, option)
        //     console.log(res.data)
        // } catch (err) {
        //     console.log(err)
        // }
        this.props.upload(data)
        this.setState({ image : null })
    }

    render () {
        const { image, address, phone, gender } = this.props
        const { edit } = this.state
        return (
            <div className="profile-container">
                <div className="profile-box">
                    <div className="avatar">
                        <img 
                            src={ image ? URL_IMG + image : avatar} 
                            height="100%" 
                            alt="profile-img"
                        />
                    </div>
                    <div className="button-profile">
                        <form encType="multipart/form-data">
                            <input 
                                type="file" 
                                accept="image/*" 
                                name="IMG" 
                                onChange={(e) => this.handleChoose(e)}
                            />
                        </form>
                        <Button 
                            className="button" 
                            variant="success"
                            onClick={this.handleUpload}
                        >
                            Upload
                        </Button>
                    </div>
                    <div className="profile-info">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                defaultValue={gender ? gender : ''}
                                disabled={!edit}
                                ref="gender"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                defaultValue={phone ? phone : ''}
                                disabled={!edit}
                                ref="phone"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-describedby="basic-addon1"
                                defaultValue={address ? address : ''}
                                disabled={!edit}
                                ref="address"
                            />
                        </InputGroup>
                        <div className="button-container">
                            { !edit ? <Button className="button" onClick={() => this.setState({ edit : true })}>Edit</Button> : null}
                            { edit ? <Button className="button" variant="success" onClick={this.handleSave}>Save</Button> : null}
                            { edit ? <Button className="button" variant="warning" onClick={() => this.setState({ edit : false})}>Cancel</Button> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        image : state.profile.image,
        address : state.profile.address,
        gender : state.profile.gender,
        phone : state.profile.phone
    }
}

export default connect(mapStateToProps, { getProfile, editProfile, upload })(Profile)