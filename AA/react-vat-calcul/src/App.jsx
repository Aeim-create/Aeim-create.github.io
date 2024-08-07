import { useState, useRef} from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import productList from './accessory-products.json'
import DataTable from './components/DataTable'
function App() {
  const pRef = useRef()
  const qRef = useRef()
  const [price, setPrice] = useState(productList[0].price)
  const [selectedItems, setSelectedItems] = useState([])
  const [filteredselectedItems, setFilteredSelectedItems] = useState([])

  
  const deleteItemByIndex = (index) =>{
    selectedItems.splice(index, 1)
    setFilteredSelectedItems([...selectedItems])
  }

  const filter = (keyword) =>{
    const filteredItems = selectedItems.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    )

    setFilteredSelectedItems(filteredItems)
  }
  const sortAsc = () => {
    const sortedItems = [...filteredselectedItems].sort((a, b) => b.name.localeCompare(a.name));
    setFilteredSelectedItems(sortedItems);
    setSelectedItems(sortedItems);
  };

  const sortDec = () => {
    const sortedItems = [...filteredselectedItems].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredSelectedItems(sortedItems);
    setSelectedItems(sortedItems);
  };

  const handleAdd = (e) =>{
    const pid = pRef.current.value
    const product = productList.find(p=> p.id == pid)
    const q = parseInt(qRef.current.value, 10)
    const existingItemIndex = selectedItems.findIndex(item => item.id == product.id)
    if(existingItemIndex !==-1){
      selectedItems[existingItemIndex].qty += q
    }
    else{
      selectedItems.push({
        //id: product.id,
        //name: product.name,
        //price: product.price,
        ...product,
        qty: q
      })
    }
    
    console.table(selectedItems)
    setSelectedItems([...selectedItems])
    setFilteredSelectedItems([...selectedItems])
  }
  const handleProductChanged = (e) =>{
    const pid = e.target.value
    const product = productList.find(p => p.id == pid)
    const p = product.price
    console.log(p)
    setPrice(p)
  }
  

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}>
            <span>Product:</span>
          </Col>
          <Col>
            <Form.Select ref={pRef} onChange={handleProductChanged}>
              {
                productList.map((p) => (
                  <option key={p.id} value = {p.id}>{p.name}</option>
                ))
              }

            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            Price:
          </Col>
          <Col>
            {price}
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <span>Quantity:</span>
          </Col>
          <Col>
          <input type='number' ref={qRef} defaultValue={1}/>
          </Col>
        </Row>
        <Button variant="secondary" onClick={handleAdd}>Add</Button>
        <DataTable data={filteredselectedItems}
          onDelete={deleteItemByIndex}
          onFilter={filter}
          onDec={sortDec}
          onAsc={sortAsc}/>
      </Container>
      
    </>
  )
}

export default App
