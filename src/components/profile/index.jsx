import Users from "../users";
import MyPosts from "./myPosts";
import style from "./style.module.css"
let profile = () =>{
    return(
        <div className={"profile-page"}>
            <div className={"profile-page__wrapper"}>
                <div className={style["profile-page__img"]}>
                    <img src="../images/post.jpeg" alt=""/>
                </div>
                <Users></Users>
                <MyPosts></MyPosts>
            </div>
        </div>
    )
}
export default  profile