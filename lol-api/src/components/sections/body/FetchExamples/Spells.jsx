import { useEffect,useState } from "react"
import { useTranslation } from "react-i18next";

import i18next from "i18next";
const Spells = () => {
    const [t] = useTranslation("global");
    const [SpellMX,setSpellMX] = useState(null)
    const [SpellUS,setSpellUS] = useState(null)
    const [Spell,setSpell] = useState(null)
    //  fetching spells data from league of legends api
    const fetchSpells=async() =>{
        let urlUs = "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/summoner.json"
        let urlMx = "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/es_MX/summoner.json"
        let raw_data_mx = await fetch(urlMx)
        let data_mx = await raw_data_mx.json()
        let arrayed_data_mx = Object.entries(data_mx.data)
        setSpellMX(arrayed_data_mx) 
        let raw_data_us = await fetch(urlUs)
        let data_us = await raw_data_us.json()
        let arrayed_data_us = Object.entries(data_us.data)
        setSpellUS(arrayed_data_us) 
        if (i18next.language === "es"){
            setSpell(SpellMX)
        }else{
            setSpell(SpellMX)
        }
        
    }

    useEffect(()=>{
        fetchSpells()
       
    },[])
    

    //  render spell data from api
    const renderSpell = ()=>{
        // final render return variable
        let whole_spell=[]

        //  adding header
        let title = 
        <div key={"summs-list-title"} className="about-fetch-header text-center px-3 py-2 rounded-3">
            <span>{t('about.fetch.success.spell')}</span>
        </div>

        //  spells array variable where will be storage all item
        let spellsRender = []
        let Spell = i18next.language === "es" ? SpellMX : SpellUS;
        Spell.map((summ,i)=>(
            // pushing spell html templates
            spellsRender.push(
            <div key={"summoner-"+i.toString()} className="col-4 spell py-2">
                <div className="about-spell position-relative text-center">
                    
                    <div className=" h-100 w-100 about-spell-box-image">
                        <img className="w-100 h-100" src={"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/"+summ[1]["image"].full} alt="" />
                    </div>
                    <div className="position-absolute top-50 about-spell-name text-center w-100 h-100">
                    <p className="w-100 h-100" style={{top:"50%"}}>{summ[1]["name"]}</p>
                    </div>
                </div>
            </div>
            )
        ))

        //  push into whole_spell variable all the style
        whole_spell.push(title,spellsRender)
        return whole_spell
    }

    //  final render output
    return(
        <div key={"about-fetch-spell"} className="about-text col-md-6 col-md-4">
            <div key={"spell-list"} className="">
                <div className="row text-center">
                {/*    in case Langs variable is set   */}
                {Spell !== null ? renderSpell() :<span>{t('about.fetch.error.spell')}</span>}
                </div>
            </div>
           
        </div>
        
    )

}

export default Spells