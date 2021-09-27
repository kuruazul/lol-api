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
                <span key={"tags-"+Champ.name+"-"+tag} className={"badge mx-1 bg-"+checkChampTags(tag)}>{translateTags(tag,true)}</span>
            )
        })
        return champTags
    }
    
    return (
        <div className="text-default">
            <div className="row container-fluid p-0 m-0">
                <div className="col-md-4 mx-auto text-center my-auto my-3 my-md-0">
                    <span className="text-uppercase fs-2">{ Champ && Champ.name}</span>
                    <div className="h-100 my-auto w-auto">
                    {addChampTags()}
                    </div>
                </div>
                <div className="col-md-8 text-center my-auto fs-3">
                    <span className="my-auto text-uppercase">{Champ && Champ.title}</span>
                </div>
            </div>
        </div>
    )    
}

export default GeneralData