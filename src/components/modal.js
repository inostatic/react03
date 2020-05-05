import React from "react"

export const Modal = ({id, url, comments, openModal}) => {
    let comment = comments.filter(item => item.id === id)
    console.log(comment)
    const closeModal = event => {
        if(event.target.dataset.close === "true") {
            openModal()
        }
    }

    return (
        <div className={"modal"}>
            <div className={"modal-overlay"} data-close={"true"} onClick={closeModal}>
                <div className={"modal-window"}>
                    <div className="modal-window-left">
                        <img src={url} alt=""/>
                        <form>
                            <input type="text" placeholder={"Ваше имя"}/>
                            <input type="text" placeholder={"Ваш комментарий"}/>
                            <button>Оставить комментарий</button>
                        </form>
                    </div>
                    <div className="modal-window-right">
                        <div>
                            {comment.length > 0
                                ? comment.map( comment => <div className={"comment"}>
                                    <div className={"comment_date"}>{comment.date}</div>
                                    <div className={"comment_text"}>{comment.text}</div>
                                </div>)
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
