import style from "./style.module.css"
let posts = (props) =>{
    return(
            <div className="posts">
                <div className={style["posts-wrapper"]}>
                    <div className={style["posts-img"]}>
                        <img src="../icons/user.svg" alt=""/>
                    </div>
                    <p>{props.message}</p>
                    <div className={style["posts-img__favorite"]}>
                        <img src="../icons/favorite.svg" alt=""/>
                        <p>{props.count}</p>
                    </div>
                </div>
        </div>
    )
}
export default posts