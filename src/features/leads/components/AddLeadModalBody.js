import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../leadSlice"

const INITIAL_LEAD_OBJ = {
    semestre_name : "",
    statut : "",
    //email : ""
}

function AddLeadModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
        if(leadObj.first_name.trim() === "")return setErrorMessage("First Name is required!")
        else if(leadObj.email.trim() === "")return setErrorMessage("Email id is required!")
        else{
            let newLeadObj = {
                "id": 7,
                //"email": leadObj.email,
                "semestre_name": leadObj.semestre_name,
                "statut": leadObj.statut,
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            }
            dispatch(addNewLead({newLeadObj}))
            dispatch(showNotification({message : "Nouveau Semestre ajoute!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={leadObj.semestre_name} updateType="semestre_name" containerStyle="mt-4" labelTitle="Nom Semestre" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={leadObj.statut} updateType="statut" containerStyle="mt-4" labelTitle="Statut" updateFormValue={updateFormValue}/>



            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddLeadModalBody