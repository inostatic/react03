import React, {useEffect, useState} from "react"
import {Axios} from "../API/API";

export const Modal = ({id, openModal}) => {
    let [comments, setComments] = useState([])
    let [info, setInfo] = useState([])
    let [text, setText] = useState('')

    useEffect(() => {
        Axios('comments', id).then(response => {
            setInfo(response.data)
            setComments(response.data.comments)
        })

    }, [])


    const closeModal = event => {
        if(event.target.dataset.close === "true") {
            openModal()
        }
    }

    const addComment = (event) => {
        event.preventDefault()
        if (text && id) {
            // Axios('add', id, text)
            setComments([
                ...comments,
                {'text': text, 'date': new Date(), id: Math.floor(Math.random() * (10000 - 999 + 1)) + 999}
            ])
            setText('')
        }
    }

    const changeInput = (e) => {
        setText(e.target.value)

    }


    return (
        <div className={"modal"}>
            <div className={"modal-overlay"} data-close={"true"} onClick={closeModal}>
                <div className={"modal-window"}>
                    <div className="modal-window-left">
                        <img src={info.url} alt=""/>
                        <form>
                            <input type="text" placeholder={"Ваше имя"}/>
                            <input type="text" placeholder={"Ваш комментарий"} value={text} onChange={changeInput}/>
                            <button onClick={addComment}>Оставить комментарий</button>
                        </form>
                    </div>
                    <div className="modal-window-right">
                        <div>
                            {comments.length > 0
                                ? comments.map( comment => <div className={"comment"} key={comment.id}>
                                    <div className={"comment_date"}>{new Date(comment.date).toLocaleTimeString()}</div>
                                    <div className={"comment_text"}>{comment.text}</div>
                                </div>
                                )
                                : <div className={"comment"}>
                                    <div className={"comment_text"}>Фотографию еще никто не комментировал</div>
                                </div>
                            }
                        </div>
                        <span className={"x"} data-close={"true"}>&times;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
