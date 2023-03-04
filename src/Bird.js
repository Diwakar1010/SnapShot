import { useState , useContext, useEffect } from "react"
import { ImgContext } from "./ImgContext"
import axios from 'axios'

const Bird =()=>{
    const imgdata = useContext(ImgContext)
       const [chang,setChang]= useState([])
       let linkArrB =[]
    useEffect(()=>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=75445dc760d7d6331fe7731d033f186f&user_id=197845635%40N08&format=json&nojsoncallback=1&api_sig=9060d72fe9a0defd715ce5fc896381f6` )
        .then((res)=>{
            for(let i=12;i<24;i++){
                linkArrB.push(`https://live.staticflickr.com/${res.data.photos.photo[i].server}/${res.data.photos.photo[i].id}_${res.data.photos.photo[i].secret}.jpg`)
            }
            setChang(linkArrB)
        })
        .catch(error => {console.log(error)
            setChang([])
        })
    }
        ,[])

    return(
        <div>
            <h1>Birds</h1>
            <div className="grid-box"> 
            {chang.map((val, i) => {
                return (
                    <div className="grid-img">
                        
                        <img src={val} alt='Birds' key={i} className="output"></img>
                    </div>
                )
            })}
            </div>
            
            </div>
    )
}


export default Bird;