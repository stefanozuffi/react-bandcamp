import AppLogo from "./AppLogo";
import AppOnlineSB from "./AppOnlineSB";
import AppNavBar from "./AppNavBar";

export default function AppUpHeader() {
    return (
        <div className="upHead">
            <div className="LNB">
                <AppLogo/>
                <AppOnlineSB/>
            </div>
            <AppNavBar/>
        </div>
    )
}