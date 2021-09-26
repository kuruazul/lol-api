import { useList } from "../../../Contexts/List"
const GeneralData = (props) => {
    const {checkChampTags, translateTags} = useList()
    const {Champ} = props

    const addChampTags=()=>{
        if (Champ===null){ return (
            <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">{"Cargando"}</span>
                </div>
        )}
        let champTags = []
        
        Champ.tags.map((tag)=>{
            champTags.push(
                <span key={"tags-"+Champ.name+"-"+tag} className={"badge mx-1 my-auto bg-"+checkChampTags(tag)}>{translateTags(tag,true)}</span>
            )
        })
        return champTags
    }

    return (
        <div className="text-default">
            <div className="row container-fluid">
                <div className="w-auto text-center">
                    <span className="text-uppercase fs-3">{Champ.name}</span>
                    <div className="">
                    {addChampTags()}
                    </div>
                </div>
                <div className="w-auto my-auto fs-2">
                    <span className="my-auto">{Champ.title}</span>
                </div>
            </div>
        </div>
    )    
}

export default GeneralData