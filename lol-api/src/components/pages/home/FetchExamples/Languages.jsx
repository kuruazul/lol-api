import { useEffect,useState } from "react"

import { useTranslation } from 'react-i18next';

const Languages = () => {
    const [t] = useTranslation("global") // tranalate function
    
    //variables using states
    const [Langs,setLangs] = useState(null) 
    
     // fetching language data from league of legends api
    const fetchLangs=async() =>{
        const url = "https://ddragon.leagueoflegends.com/cdn/languages.json"
        let raw_data = await fetch(url)
        let data = await raw_data.json()
        setLangs(data) 
        
    }
    
    //  using react useEffect hook to wait the promised fetch
    useEffect(()=>{
        fetchLangs()
    },[])

    // render languages data given from league of legends api
    const renderLangs = ()=>{

        //  final render return variable
        let whole_lang=[]

        //  header section
        let title = 
        <div key={"langs-list-title"} className="about-fetch-header text-center px-3 py-2 rounded-3">
            <span>{t('about.fetch.success.langs')}</span>
        </div>

        //  list of languages variable
        let langs = []
        Langs.map((lang,i)=>(
            
            langs.push(<div key={"language-"+i.toString()} className="col-4"><p>{lang}</p></div>)
        ))

        //  final push to render
        whole_lang.push(title,langs)
        return whole_lang
    }

    

    //  final render output
    return(
        <div key={"about-fetch-langs"} className="about-text  col-md-6 col-md-4">
            
            
            <div key={"langs-list"} className="">
                <div className="row text-center">
                {/*    in case Langs variable is set   */}
                {Langs !== null ? renderLangs() :<span>{t('about.fetch.error.langs')}</span>}
                </div>
            </div>
            
        </div>
    )
}

export default Languages