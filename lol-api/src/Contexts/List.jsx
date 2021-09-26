import React,{ useState, useEffect, useMemo } from "react"
import axios from "axios"
import i18next from 'i18next'
const ListContext = React.createContext()
export const ListProvider =(props)=>{
    const [List,setList]=useState([])
    const [Loading,setLoading] = useState(false)
    const fetchChamps =async()=>{
        setLoading(true)
        let rawData=null;
        if (i18next.language ==="en"){
        rawData =await axios.get("https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json")
                                .then(res => res.data)
            let data =Object.values(rawData.data)        
            setList(data)
        }
        else{
        rawData =await axios.get("https://ddragon.leagueoflegends.com/cdn/11.19.1/data/es_MX/champion.json")
                                .then(res => res.data)
            let data =Object.values(rawData.data)        
            setList(data)
        }
        setLoading(false)
    }
    const checkChampTags=(tag)=>{
        
            if (tag==="Fighter") return "danger"   
            if (tag==="Mage") return "info text-black"   
            if (tag==="Support") return "success"  
            if (tag==="Tank") return "secondary"
            if (tag==="Assassin") return "light text-black"
            if (tag==="Marksman") return "warning"       
        

    }

    const translateTags =(tag,render = false)=>{
        if(render){
            if(i18next.language==="es"){
                if (tag==="Fighter") return "Peleador"   
                if (tag==="Mage") return "Mago"   
                if (tag==="Support") return "Soporte"  
                if (tag==="Tank") return "Tanque"
                if (tag==="Assassin") return "Asesino"
                if (tag==="Marksman") return "Tirador"       
            }
            else
            return tag
        }else{
            if(i18next.language!=="es"){
                if (tag==="Fighter") return "Peleador"   
                if (tag==="Mage") return "Mago"   
                if (tag==="Support") return "Soporte"  
                if (tag==="Tank") return "Tanque"
                if (tag==="Assassin") return "Asesino"
                if (tag==="Marksman") return "Tirador"       
            }
            return tag
        }
    }

    useEffect(()=>{
        fetchChamps()
    },[])
    const valueContext = useMemo(()=>{
        return ({
            List,
            Loading,
            fetchChamps,
            checkChampTags,
            translateTags
        })
    },[Loading,List])

    return <ListContext.Provider value={valueContext} {...props}/>
}

export const useList =()=>{
    const context = React.useContext(ListContext)
    if(!context)
    throw new Error('Context undefined')

    return context
}