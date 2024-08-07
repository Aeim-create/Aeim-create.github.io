import React from "react";
import { Container, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

const DataTable = ({data, onDelete, onFilter, onDec, onAsc}) =>{
    const sRef = React.useRef()
    const handleSearch = () =>{
        const keyword = sRef.current.value
        onFilter(keyword)
    }
    const handleDescend = () =>{
        onDec()
    }
    const handleAscend = () =>{
        onAsc()
    }
    return(
        <Container>
            <input type="text" placeholder="Search..." ref={sRef}/>{''}
            <Button onClick={handleSearch} variant="outline-dark" className="bi bi-search">Search</Button>

            <Button onClick={handleDescend}variant="outline-dark" className="bi bi-arrow-down"></Button>
            <Button onClick={handleAscend} variant="outline-dark" className="bi bi-arrow-up"></Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>(
                        <tr key={index}>
                            <td>
                                <i className="bi bi-trash"
                                onClick={()=>onDelete(index)}>
                                </i>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        
    );
};

export default DataTable;