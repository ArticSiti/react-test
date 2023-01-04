import style from './style.module.css'
let user = () =>{
    return(
        <div className="users">
            <div className={style['users-wrapper']}>
                <div className={style['users-wrapper__img']}>
                    <img src="../icons/user.svg" alt=""/>
                </div>
                <div className={style["users-wrapper__description"]}>
                    <h3 className={style["users-wrapper__title"]}>Asef</h3>
                    <div className={style["users-wrapper__container"]}>
                    <div className={style["users-wrapper__text"]}>
                        <label htmlFor="date">Date of Birth:</label>
                        <p id="date" className={`${style["users-wrapper__text"]} ${style["text"]}`}>2 January</p>
                    </div>
                    <div className={style["users-wrapper__text"]}>
                        <label htmlFor="city">City:</label>
                        <p id="city" className={`${style["users-wrapper__text"]} ${style["text"]}`}>Derbent</p>
                    </div>
                    <div className={style["users-wrapper__text"]}>
                        <label htmlFor="education">Education:</label>
                        <p id="education" className={`${style["users-wrapper__text"]} ${style["text"]}`}>BSU 11</p>
                    </div>
                    <div className={style["users-wrapper__text"]}>
                        <label htmlFor="web-site">Web site:</label>
                        <a id="web-site" className={`${style["users-wrapper__text"]} ${style["text"]}`} href="https://therpk.ru">Технический колледж</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default user