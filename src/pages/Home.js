import React, {useEffect, useState} from "react"
import {Modal} from "../components/modal";
import {Axios} from "../API/API";

export const Home = ({photos, comments}) => {
    const [modal, setModal] = useState({
        status: false,
        id: null,
        url: ''
    })


      const  openModal = (url = '', id = '') => {
           setModal({
               status: !modal.status,
               id: id,
               url: url
           })
          }


    return (
        <>
            {}
            <div className={"content"}>
                {photos.map( photo => {
                    return (
                            <img src={photo.url} alt="#" key={photo.id} id={photo.id} onClick={ () => { openModal(photo.url, photo.id)}}/>
                        )
                })}
            </div>
            {modal.status === true ? <Modal id={modal.id} url={modal.url} comments={comments} openModal={openModal}/>: null}
        </>
    )
}
