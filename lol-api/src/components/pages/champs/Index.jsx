import '../../../assets/css/Champs.css'
import Filter from './Filter'
import { useState } from 'react'
import ChampsView from './ChampsView'


const Index = () => {
    
    const ChampsTypes = (["a","b"])
    const [Results,setResults] = useState(0)
    const [Search,setSearch] = useState("")


  

    const setDataSearch =(search)=>{
        setSearch(search)
    }

    const setDataResults=(result)=>{
        setResults(result)
    }

    return(
        <div key="page-champs" className="text-center text-white champs-box">
            <hr />
            <div className="row container-fluid mx-auto">
                <div className="col-md-3">
                    <Filter setDataSearch={setDataSearch} 
                            ChampsTypes={ChampsTypes} 
                    />
                </div>
                
                    <ChampsView Search={Search}
                                ChampsTypes={ChampsTypes}
                                Results={Results} 
                                setDataResults={setDataResults}
                    />
                
            </div>
        </div>
    )
}

export default Index