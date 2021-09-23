import { useEffect, useState } from "react"
import ChampItem from './ChampItem'
import axios from 'axios'
const ChampsView = (props) => {
    const { setDataChamps, 
            Champs, 
            Search,
            setDataResults,
            Results,
            ChampsTypes,
            setDataChampsTypes} = props
    
    const [Loading,setLoading]=useState(false)
    const fetchChamps =async()=>{
        setLoading(true)
        let rawData =await axios.get("https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json")
                                .then(res => res.data)
        let data =Object.values( rawData.data)        
        setDataChamps(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchChamps()
    },[])

    const renderChamps=()=>{
        if (Champs === null) 
        return ""
        
        let champsArray=[]
        Champs.map((champ) =>{
            
            if (champ.name.toLowerCase().includes(Search.toLowerCase())){
                champsArray.push(
                    <ChampItem ChampsTypes={ChampsTypes} setDataChampsTypes={setDataChampsTypes}  champ={champ}/>
                )
            }
        })
        setDataResults(champsArray.length)
        return champsArray
    }

    return(
        <div className="col-md-9 gy-3 row">
            <div className="text-center">
            {Loading ? 
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">{"Cargando"}</span>
                </div>
            :
                <span className="fs-2">{Results + " Resultados"}</span> 
            }
            </div>
            {renderChamps()}
        </div>
    )
}

export default ChampsView