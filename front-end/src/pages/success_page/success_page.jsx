import "./success_page.css"
import { useNavigate } from "react-router-dom";

export default function Success_page(){
    const navigate = useNavigate();
    const go_home = ()=>{
        navigate('/')
    }
    return (
        <div className = "done_Successfully">
            <div className="success">
                <p></p>
                <svg data-id="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 h-16 w-16"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <p>payment is done Successfully</p>
                <hr></hr>
                <p>Expected Delivery Date: 1-2 Business Days</p>
                <p>for any help please contact 01158281903</p>
                <button onClick={go_home} style={{width:'70%', borderRadius:'10px', backgroundColor:'green'}}>go to home page</button>
                <p></p>
            </div>
        </div>
    );
}