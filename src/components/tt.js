import React from "react"

export const Home = ({photos, comments}) => {
    const openModal = (event) => {
        let modal = document.createElement('div')
        modal.classList.add('modal')

        let comment = comments.filter(item => String(item.id) === event.target.id).map(comment => {
            return `<div class="comment"><div class="comment_date">${comment.date}</div><div class="comment_text">${comment.text}</div></div>`
        }).join('') || `<div class="comment">Фотографию еще никто не прокоментировал</div>`

        modal.insertAdjacentHTML("afterbegin", `
          <div class="modal-overlay" data-close="true">
            <div class="modal-window">
                <div class="modal-window-left">
                    <img src="${event.target.src}" alt="">
                    <form>
                        <input type="text" placeholder="Ваше имя">
                        <input type="text" placeholder="Ваш комментарий">
                        <button>Оставить комментарий</button>
                    </form>
                </div>
                <div class="modal-window-right">
                    <div>
                        ${comment}
                    </div>
                    <span class="x" data-close="true">&times;</span>
                </div>
            </div>
        </div>
        `)

        modal.querySelector('.modal-overlay').addEventListener('click', closeModal)
        document.querySelector(".wrapper").appendChild(modal)

    }

    const closeModal = (event) => {
        if(event.target.dataset.close === "true") {
            let dom = document.querySelector('.modal')
            if(dom) dom.parentNode.removeChild(dom)
        }
    }


    return (
        <div className={"content"}>
            {photos.map( photo => {
                return (
                    <img src={photo.url} alt="#" key={photo.id} id={photo.id} onClick={openModal}/>
                )
            })}
        </div>
    )
}
