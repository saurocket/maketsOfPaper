import { useData } from '../../Context/DataContext'
import Sprite from '../../img/icons/icons.svg'
import {useEffect} from "react";

export const FormHero = () => {
    const {data, setValues}:any = useData()

    useEffect(() => {
        console.log(data)
        if (data){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "";
        }

    }, [data])

    const formClose = () => {
        setValues(false)
    }

    return (
        <div
            className={data? "backdrop" : "backdrop is-hidden"}
        >
            <div className="modal">
                <div className="modal-wrapper">
                    <button
                        className="btn-close"
                    onClick={() => {formClose()}}
                    >&#9932;</button>
                    <form id="modal">
                        <b className="modal-header">Оставьте свои данные, мы вам перезвоним</b>
                        <div className="group">
                            <label className="form-label" htmlFor="name">
                                Имя
                            </label>
                            <input className="form-input" type="text" id="name" name="name"/>
                    <span>
                            <svg className="modal-icon">
                                <use href={Sprite + '#user'}></use>
                            </svg>
                        </span>
                        </div>
                        <div className="group">
                            <label className="form-label" htmlFor="tel">
                                Телефон

                            </label>
                            <input className="form-input" type="tel" id="tel" name="telephone"/>
                    <span>
                            <svg className="modal-icon">
                                <use href={Sprite + '#smartphone'}></use>
                            </svg>
                        </span>
                        </div>
                        <div className="group">
                            <label className="form-label" htmlFor="email">
                                Почта

                            </label>
                            <input className="form-input" type="email" id="email" name="email"/>
                            <span>
                            <svg className="modal-icon modal-icon-mail">
                                <use href={Sprite + '#mail'}></use>
                            </svg>
                        </span>
                        </div>
                        <div className="group">
                            <label htmlFor="comment">Коментарий</label>
                            <textarea className="form-input" id="comment" name="comment" placeholder="Введите текст">
                        </textarea>
                        </div>
                        <button className="form-btn" type="submit">Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
)


}