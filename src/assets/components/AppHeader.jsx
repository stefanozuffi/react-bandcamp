import AppUpHeader from "./headerCom/AppUpHeader"
import AppLibSB from "./headerCom/AppLibSB"

export default function AppHeader() {
    return (
        <header className="container">
            <AppUpHeader/>
            <AppLibSB/>
        </header>
        
    )
}