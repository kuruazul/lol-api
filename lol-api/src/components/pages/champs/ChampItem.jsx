import React from 'react'
import { useList } from '../../../Contexts/List'
import { Link } from 'react-router-dom'
const ChampItem = (props) => {
    const {champ}  = props
    const {checkChampTags,translateTags} = useList()


    const addChampTags=()=>{
        let champTags = []
        
        champ.tags.map((tag)=>{
            champTags.push(
                <span key={"tags-"+champ.name+"-"+tag} className={"badge mx-1 bg-"+checkChampTags(tag)}>{translateTags(tag,true)}</span>
            )
        })
        
        return champTags
    }
    return (
        
        <div key={"name-"+champ.name} className="col-6 col-sm-4 col-lg-3 px-0 my-5" style={{height:"10rem"}}>
            <div className="text-center bottom-0 w-100">
                <span className="champ-text-name">{champ.name}</span>
            </div>
            <div className="champ-img-box champ-box mx-auto btn">
                <Link to={"/champs/"+champ.id}>
                <img className="champ-img" src={"http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/"+champ.id+".png"} alt="" />
                </Link>
            </div>
            <div className="text-center">
            {addChampTags()}
            </div>
        </div>
        
    )
}
export default ChampItem