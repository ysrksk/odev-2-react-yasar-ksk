import React, {useState, useEffect} from "react";
import Film from "./Film";
import { Tables, Th, Td, Tr, Button, Input, Select, B } from "../componentsClass/styleComponents/TableStyled";

class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            value: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            search : e.target.value
        })
    }

    valueChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    deletePost = (itemIndex) => {
        const deletedData = this.props.data.filter((item, index) => index !== itemIndex)
        this.props.setData(deletedData);
    }
    
    render(){
        const  filteredData = this.state.value === '' ? this.props.data.filter(data=> data.name.toLowerCase().includes(this.state.search.toLowerCase())) : this.props.data.filter(data=> data.gender===this.state.value)
        return(
            <div>
                <div>
                <h1>Artists Table</h1>
                <Input value={this.state.search} onChange={this.handleChange} type="text" placeholder="Searc"/>

                <label>
                    <B>Gender</B>
                    <Select value={this.state.value} onChange={this.valueChange}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="n/a">n/a</option>
                    </Select>
                </label>
                <Tables>
                    <thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Height</Th>
                            <Th>Gender</Th>
                            <Th>Films</Th>
                            <Th>Sil</Th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredData.map((data,index) => (
                                <Tr key={index}>
                                    <Td>{data.name}</Td>
                                    <Td>{data.height}</Td>
                                    <Td>{data.gender}</Td>
                                    <Td>{data.films.map((url, index) => (
                                        <Film key={index} url={url}/>
                                    ))}</Td>
                                    <Td><Button  onClick={() => this.deletePost(index)}>Sil</Button></Td>
                                </Tr>
                        ))}
                    </tbody>
                    
                </Tables>
                </div>
            </div>
        )
    }
}

export default Table;


