const Header = () => {

    const media = {
        '@media (max-width: 650px)':{
            backgroundImage: 'url("C:\Users\deepak\office\deepak\src\components\cc.png")' ,
        },
        '@media (min-width: 750px)':{
            backgroundImage: 'url(C:\Users\deepak\office\deepak\src\components\cc.png")' ,
        }
    }
    return ( 
        <div className="header-wrapper">
            <main className="header-flex" style={media}>
                    <img src="starter-code/assets/desktop/logo.svg" alt="logo" className="logo-img"/>
                    <div class="space-around">
                        <img src="starter-code/assets/desktop/icon-sun.svg" alt="icon-sun" className="sun-img"/>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"/>
                        </label>
                        <img src="starter-code/assets/desktop/icon-moon.svg" alt="icon-moon" className="moon-img"/>
                    </div>
            </main>
                <div className="input-search">
                    <img src="starter-code/assets/desktop/icon-search.svg" alt="icon-search" className="icon-search"/>
                    <input type="text" placeholder="Enter desired job..." className="enter-job"/>
                </div>

        </div>
     );
}
 
export default Header;