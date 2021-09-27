import { useState, useEffect } from 'react'
import '../../../assets/css/ChampInfo.css'
import GeneralData from './GeneralData'
import axios from 'axios'
import ChampSkin from './ChampSkin'
const Index = (props) => {
    const [Champ,setChamp] = useState(null)
    const {id} = props.match.params
    const urlChamp = "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/es_MX/champion/"+id+".json"
    const fetchChamp = async()=>{
        let rawData = await axios.get(urlChamp).then(data=>data.data)
        console.log(rawData.data[id])
        setChamp(rawData.data[id])
    }
    useEffect(()=>{
        fetchChamp()
    },[])
    
    return( 
    <div className=" champ-info-box container-fluid" >
        <div className="row">
            <div className="col-md-4">
                <ChampSkin Champ={Champ}/>
            </div>
            <div className="col-md-8">
            <GeneralData Champ={Champ}/>
            </div>
        </div>
    </div>)
}

export default Index