const Layout = ({children}) => {
    return ( 
        <div>
            <h1>Layout</h1>
            {children}
            <footer>
                <p>Copyright 2022</p>
            </footer> 
        </div>
    );
}
export default Layout;