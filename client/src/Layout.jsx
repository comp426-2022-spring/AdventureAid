import Navbar from "./components/Navbar";
function Layout(props) {
    return ( 
        <div>
            <Navbar />
            <main style={{marginTop:"100px"}}>{props.children}</main>
        </div>
    );
}

export default Layout;