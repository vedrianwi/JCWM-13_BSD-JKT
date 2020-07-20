import React from 'react'
import Axios from 'axios'
import { 
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'

const URL = 'http://newsapi.org/v2/top-headlines?'
const KEY = '&apiKey=2fd11846d6f54c05956d09209c1b5fbe'

class RequestAPI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            countryId : 'id'
        }
    }

    componentDidMount () {
        this.getDataFromAPI(`country=${this.state.countryId}`)
    }

    getDataFromAPI = (query) => {
        Axios.get(URL + query + KEY)
        .then(response => this.setState({ data : response.data.articles}))
        .catch(error => console.log(error))
    }

    handleFilterByCountry = (id) => {
        this.setState({countryId : id})
        this.getDataFromAPI(`country=${id}`)
    }

    handleFilterByCategory = (category) => {
        this.getDataFromAPI(`country=${this.state.countryId}&category=${category}`)
    }

    dropdownAuthor = () => {
        return (
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                    Authors
                </DropdownToggle>
                <DropdownMenu>
                    {this.state.data.map(item => <DropdownItem>{item.author}</DropdownItem>)}
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    dropdownCountry = () => {
        return (
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                    Filter by Country
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => this.handleFilterByCountry('us')}>United State</DropdownItem>
                    <DropdownItem onClick={() => this.handleFilterByCountry('au')}>Asutralia</DropdownItem>
                    <DropdownItem onClick={() => this.handleFilterByCountry('kr')}>South Korea</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    dropdownCategory = () => {
        return (
            <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
                Filter by Category
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => this.handleFilterByCategory('business')}>Business</DropdownItem>
                <DropdownItem onClick={() => this.handleFilterByCategory('science')}>Science</DropdownItem>
                <DropdownItem onClick={() => this.handleFilterByCategory('technology')}>Technology</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        )
    }

    renderCard = () => {
        return this.state.data.map(item => {
            return (
                <div style={{width : '25%', height : '60vh', margin : '10px'}}>
                    <Card style = {{height : '100%'}}>
                        <CardImg top width="100%" src={item.urlToImage} alt="article-img" />
                        <CardBody>
                            <CardTitle style={{fontWeight : 700, fontSize : '18px'}}>
                                {item.title}
                            </CardTitle>
                            <CardText style={{fontSize : '14px'}}>
                                {item.description}
                            </CardText>
                            <Button href={item.url}>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }

    render () {
        // console.log(this.state.data)
        return (
            <div style={{padding : '1% 2%'}}>
                <h1> Requet API</h1>
                {this.dropdownAuthor()}
                {this.dropdownCountry()}
                {this.dropdownCategory()}
                <div style={{display : 'flex', flexWrap : 'wrap'}}>
                    {this.renderCard()}
                </div>
            </div>
        )
    }
}

export default RequestAPI