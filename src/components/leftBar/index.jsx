import style from "./style.module.css"
let leftBar = () =>{
    return(
            <div className={"left-bar"}>
                    <div className={style["left-bar__wrapper"]}>
                        <nav>
                            <ul>
                                <li><a className={"link"} href="#"><img src="../icons/settings.svg" alt=""/> <p>Profile</p></a></li>
                                <li><a className={"link"} href="#"><img src="../icons/messages.svg" alt=""/> <p>Messages</p></a></li>
                                <li><a className={"link"} href="#"><img src="../icons/news.svg" alt=""/> <p>News</p></a></li>
                                <li><a className={"link"} href="#"><img src="../icons/music.svg" alt=""/> <p>Music</p></a></li>
                                <li><a className={"link"} href="#"><img src="../icons/profile.svg" alt=""/> <p>Settings</p></a></li>
                            </ul>
                        </nav>
                    </div>
            </div>
    )
}
export default leftBar