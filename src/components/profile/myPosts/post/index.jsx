import style from "./style.module.css"
let posts = (props) =>{
    return(
            <div className="posts">
                <div className={style["posts-wrapper"]}>
                    <div className={style["posts-img"]}>
                        <img src="../icons/user.svg" alt=""/>
                    </div>
                    <p>{props.message}</p>
                    
                </div>
        </div>
    )
}
export default posts