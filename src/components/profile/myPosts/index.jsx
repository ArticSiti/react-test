import style from "./style.module.css"
import Post from "./post";
let myPosts = () =>{
    return(
        <div className={"my-posts"}>
            <h2>My posts</h2>
            <div className={style["new-post"]}>
                <textarea name="" id="" cols="30" rows="10" className={style["new-post__text"]}></textarea>
                <button className={"button"}>Add now</button>
            </div>
            <Post message={"Hello, how you?"} count={"10"}/>
            <Post message={"My name Piter"} count={"25"}/>
        </div>
    )
}
export default myPosts