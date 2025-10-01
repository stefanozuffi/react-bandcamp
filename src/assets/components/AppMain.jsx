import AppActiveTrack from "./mainCom/AppActiveTrack";
import AppProducts from "./mainCom/AppProducts";

export default function AppMain() {
    return(
        <main>
            <div className="container MainDiv">
                <AppProducts/>
                <AppActiveTrack/>
            </div>
            
        </main>
        
    )
}