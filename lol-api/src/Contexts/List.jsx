import React,{ useState, useEffect, useMemo } from "react"
import axios from "axios"

const ListContext = React.createContext()
export const ListProvider =(props)=>{
    const [List,setList]=useState([])
    const [Loading,setLoading] = useState(false)
    const fetchChamps =async()=>{
        setLoading(true)
        let rawData =await axios.get("https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json")
                                .then(res => res.data)
        let data =Object.values( rawData.data)        
        setList(data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchChamps()
    },[])
    const valueContext = useMemo(()=>{
        return ({
            List,
            Loading
        })
    },[Loading])

    return <ListContext.Provider value={valueContext} {...props}/>
}

export const useList =()=>{
    const context = React.useContext(ListContext)
    if(!context)
    throw new Error('Context undefined')

    return context
}