import Table from './components/Table'
import {useEffect, useState} from 'react'


function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    console.log(data)

    return (
        <>
            <Table data={data} />
        </>
    )
}

export default App
