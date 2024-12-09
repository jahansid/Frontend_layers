import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

const logosData = [
    { name: "Quantum", logoImage: quantumLogo },
    { name: "Acme Corp", logoImage: acmeLogo },
    { name: "Echo Valley", logoImage: echoValleyLogo },
    { name: "Pulse", logoImage: pulseLogo },
    { name: "Outside", logoImage: outsideLogo },
    { name: "Apex", logoImage: apexLogo },
    { name: "Celestial", logoImage: celestialLogo },
    { name: "Twice", logoImage: twiceLogo },
];

const LogoTicker = () => {
    return (
        <section className=" py-24 overflow-x-clip">
            <div className="container">
                <h3>Already chosen by these market leaders.</h3>
                <div>
                <div>  
                       
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;
