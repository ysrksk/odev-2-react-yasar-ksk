import React, {useState, useEffect} from "react";
import Film from "./Film";
import { Tables, Th, Td, Tr, Button, Input, Select, B } from "./sytle-components/TableStyled";
import Loading from "./Loading";
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';



const Table = ({data, setData})=> {
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2500);
    })

    const createNotification = () => {
        NotificationManager.error('İlgili Kayıt Silindi', ' ', 5000);
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const valueChange = (e) => {
        setValue(e.target.value)
    }
   
    const  filteredData = value === '' ? data.filter(data=> data.name.toLowerCase().includes(search.toLowerCase())) : data.filter(data=> data.gender===value)
       
    const deletePost = (itemIndex) => {
        const deletedData = data.filter((item, index) => index !== itemIndex)
        setData(deletedData);
    }
 
    return(
        <div>
        {isLoading===true ? <Loading/>: (
            <div>
            <h1>Artists Table</h1>
            <Input value={search} onChange={handleChange} type="text" placeholder="Searc"/>

            <label>
                 <B>Gender</B>
                <Select value={value} onChange={valueChange}>
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
                                <Td><Button className='btn btn-danger' onClick={() => {deletePost(index); createNotification() }}>Sil</Button></Td>
                            </Tr>
                    ))}
                </tbody>
                
            </Tables>
            </div>
            )}
        </div>
    )
}

export default Table;


