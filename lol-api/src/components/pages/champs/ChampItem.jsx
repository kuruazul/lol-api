import React from 'react'


const ChampItem = (props) => {
    const {champ}  = props
    
    const checkChampTags=(tag)=>{
        
        if (tag==="Fighter") return "danger"   
        if (tag==="Mage") return "info text-black"   
        if (tag==="Support") return "success"  
        if (tag==="Tank") return "secondary"
        if (tag==="Assassin") return "light text-black"
        if (tag==="Marksman") return "warning"       

    }

    const addChampTags=()=>{
        let champTags = []
        
        champ.tags.map((tag)=>{
            champTags.push(
                <span key={"tags-"+champ.name+"-"+tag} className={"badge mx-1 bg-"+checkChampTags(tag)}>{tag}</span>
            )
        })
        
        return champTags
    }
    return (
        <div key={"name-"+champ.name} className="col-6 col-sm-4 col-lg-3 px-0 my-5 position-relative" style={{height:"10rem"}}>
            <div className="text-center bottom-0 w-100">
                <span className="champ-text-name">{champ.name}</span>
            </div>
            <div className="champ-img-box champ-box mx-auto btn">
            <img className="champ-img" src={"http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/"+champ.id+".png"} alt="" />
            
            </div>
            <div className="text-center">
            {addChampTags()}
            </div>
        </div>
    )
}
export default ChampItem