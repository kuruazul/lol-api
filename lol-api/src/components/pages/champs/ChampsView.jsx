
import ChampItem from './ChampItem'
import axios from 'axios'
import { useList } from "../../../Contexts/List"
const ChampsView = (props) => {
    const {List,Loading} =useList()
    const { 
            Search,
            setDataResults,
            Results,
            ChampsTypes,
            setDataChampsTypes} = props
    
    
    const checkTypes=(champ)=>{
        let check = false
        champ.tags.map((tag)=> {
            if (tag.toLowerCase().includes(Search.toLowerCase()))
            check = true
        })
        return check
    }
    const renderChamps=()=>{
        if (List === null) 
        return ""

    
        
        
        let champsArray=[]
        List.map((champ) =>{
            
            
            if (champ.name.toLowerCase().includes(Search.toLowerCase()) || checkTypes(champ) ){
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