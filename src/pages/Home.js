import React, {useEffect, useState} from "react"
import {Modal} from "../components/modal";
import {Axios} from "../API/API";

export const Home = ({comments}) => {

    let [preload, setPreload] = useState(true)
    let [photos, setPhotos] = useState([])
    let [modal, setModal] = useState({
        status: false,
        id: '',
        url: ''
    })

    useEffect(() => {
        if(photos.length === 0) {
            Axios('photos').then(response => {
            setPhotos(response.data)
            setPreload(!preload)
        })}

    },[])

    const openModal = (id = '', url ='') => {
        setModal({
            status: !modal.status,
            id: id,
            url: url
        })
    }







    return (
        <>
            {
                preload
                ? null
                :  <div className={"content"}>
                        {photos.map( photo => {
                            return (
                                <img src={photo.url} alt="#" key={photo.id} id={photo.id} onClick={() => {openModal(photo.id, photo.url)}}/>
                            )
                        })}
                    </div>
            }

            {modal.status === true ? <Modal id={modal.id} openModal={openModal}/>: null}
        </>
    )
}
