import LeftBar from "../leftBar";
import PostsPage from "../profile";

let content = () =>{
    return(
        <div className="content-wrapper container">
            <LeftBar></LeftBar>
            <PostsPage></PostsPage>
        </div>
    )
}
export  default content