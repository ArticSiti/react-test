import style from './style.module.css'
let menu = () => {
    return (
        <div className="menu">
            <div className={`${style["menu-wrapper"]} ${'container'}`}>
                <div className={style["menu-wrapper__logo"]}>
                    <a href="#"><img src="../images/logo-no-background.svg" alt=""/></a>
                </div>
                <nav>
                    <ul>
                        <li><a className="link" href="react-test/src/header/menu#">Home</a></li>
                        <li><a className="link" href="react-test/src/header/menu#">About</a></li>
                        <li><a className="link" href="react-test/src/header/menu#">Posts</a></li>
                        <li><a className="link" href="react-test/src/header/menu#">Comment</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default menu