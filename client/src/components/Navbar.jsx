import { Link } from 'react-router-dom'
import Card from './Card';
function Navbar() {
    return ( 
        <Card>
            <div style={{textAlign: "center"}}> <div class="tab">
                  <Link to="/"><button class="tablinks" className="button-1">Home</button></Link>
                  <Link to="/signup"><button class="tablinks" className="button-1">Sign Up</button></Link>
                  <Link to="/login"><button class="tablinks" className="button-1">Login</button></Link>
                  <Link to="/update"><button class="tablinks" className="button-1">Update</button></Link>
            </div></div>
        </Card>
     );
}

export default Navbar;