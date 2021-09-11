import { useEffect,useState } from "react"
import { useTranslation } from "react-i18next";


const Spells = () => {
    const [t] = useTranslation("global");
    const [Spell,setSpell] = useState(null)

    //  fetching spells data from league of legends api
    const fetchSpells=async() =>{
        const url = "http://ddragon.leagueoflegends.com/cdn/11.18.1/data/es_MX/summoner.json"
        let raw_data = await fetch(url)
        let data = await raw_data.json()
        let arrayed_data = Object.entries(data.data)
        setSpell(arrayed_data) 
        
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
        let spells = []
        
        Spell.map((summ,i)=>(
            // pushing spell html templates
            spells.push(
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
        whole_spell.push(title,spells)
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