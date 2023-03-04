import {  useState } from 'react'
// import App from './App'
import Mount from './Mount'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Beach from './Beach'
import Food from './Food'
import Bird from './Bird'
// import { ImgContext } from './ImgContext'
// import { Link } from 'react-router-dom'


const SearchPage = () => {
    // const linkData = useContext(ImgContext)
    // const [val, setVal] = useState("")
    // const [pathName,setPathName] =useState("")
    const [cli, setcli] = useState('')
    // const [dis, setDis] = useState(true)
    const handleChange = (e) => {
        // setVal(e.target.value)
        // setDis(false)
        setcli(e.target.value)

    }
    // const handleClick = ()=>{
    //      setPathName(cli)
    // }
    return (
        <div className='App' >
            <h1 className='h1'>Snap-shot</h1>
            <input type="text" placeholder='search' className='bar' onChange={handleChange} ></input>
            <button >
                <i className="fa fa-search" id='icon'></i>
            </button>
            <div className='btns'>
                <button className='inbtns'  >Mountain</button>
                <button className='inbtns' >Beaches</button>
                <button className='inbtns' >Birds</button>
                <button className='inbtns' >Food</button>
            </div>
            <div>
                    {cli === "mountains" ? <Mount /> : ""}
                    {cli === "beaches" ? <Beach /> : ""}
                    {cli === "birds" ? <Bird /> : ""}
                    {cli === "food" ? <Food /> : ""}
            </div>
        </div>

    )
}

export default SearchPage;




// Key:
// 220949332ada1d16626d205e5836e6e4

// Secret:
// e53a4c95730896e2