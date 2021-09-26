import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useTranslation } from 'react-i18next'
console.log(new Date())
 const Filter = (props) => {
     const [t] = useTranslation("global")
     const {setDataSearch,ChampsTypes} = (props)
     console.log(ChampsTypes)
     const searchChamp =(e)=>{
         setDataSearch(e.target.value)
     }

     const renderChampsTypes=()=>{
         if (ChampsTypes===null) 
         return <div className="my-3 text-default">No data</div>

        let allChampsTypes =[]
         ChampsTypes.map((type)=>{
             allChampsTypes.push(
                 <div className="">
                     <label htmlFor={type}>{type}</label>
                     <input name={type} className="form-control" type="checkbox" />
                     
                 </div>
             )
         })
     }
    return (
        <div className=" w-100 h-auto sticky-top position-relative">
           
           <div className="filter-body position-absolute" style={{height:"100%" , width:"100%"}}>
                
            </div>
            <div className="accordion border-0" id="accordionExample">
                <div className="card border-0 bg-transparent">
                    <div className="card-header border-0" id="headingOne">
                        <h2 className="mb-0 ">
                            <button className="bg-transparent text-default btn-block w-100 border-0 text-decoration-none fs-4" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {t('champs.filter.title')}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="form-row">
                                <input className="form-control border-0 text-center text-default bg-transparent" placeholder={t('champs.filter.placeholder')} type="text" onChange={searchChamp} />
                            </div>
                            <div className="form-row text-center">
                                {renderChampsTypes()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
export default Filter