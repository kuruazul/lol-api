import { useState,useEffect } from "react/cjs/react.development"

const ChampSkin = (props) => {
    const {Champ} = props
    const [img, setImg] =useState("")

    const renderChampSkins=()=>{
        let preTemplate = []
        if (Champ===null) return "Loading"

        Champ.skins.map((skin,i)=>{ 

            preTemplate.push(
                <div class={i===0 ? "carousel-item active p-3":"carousel-item p-3"}>
                    <div className="w-100 champ-skins">
                    <img class=" h-100 w-100 " src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+Champ.id+"_"+skin.num+".jpg"}  alt="..."/>
                    </div>
                    <div className="text-center mt-3">
                    <span className="text-default">{skin.name}</span>
                    </div>
                </div>
            )
        })
        return preTemplate
    }


    return (
        <div className="mx-auto w-75">
            <div id="carouselChampSkins" class="carousel carousel-fade " data-interval="false" >
            <div class="carousel-inner">
                {renderChampSkins()}
            </div>
            <a class="carousel-control-prev" href="#carouselChampSkins" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon arrows" aria-hidden="true"></span>
                
            </a>
            <a class="carousel-control-next" href="#carouselChampSkins" role="button" data-slide="next">
                <span class="carousel-control-next-icon arrows" aria-hidden="true"></span>
                
            </a>
            </div>
        </div>
    )
}

export default ChampSkin