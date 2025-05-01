import { faCodepen, faXTwitter,  faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModeContext } from '../contexts/modeContext';
import { useContext } from 'react';
import { useSelector } from "react-redux";
export default function Footer() {
    const {language, mode} = useContext(ModeContext);
    const header = useSelector((store) => store.tr.footer.header);
    const body = useSelector((store) => store.tr.footer.body);
    return (
        <div className={"min-h-[450px]  text-center items-center flex flex-col justify-center " + (mode ? "" : "bg-[#252128]")}>
            <div className="max-w-[500px]">
                <h1 className={"font-bold text-[48px]/12  mb-[2rem] " + (mode ? "text-[#4731D3]" : "text-[#8F88FF]")}>{language ? "Send me a message!" : header}</h1>
                <p className={"text-[24px] text-[#120B39] mb-[2rem] " + (mode ? "text-[#120B39]" : "text-[#FFFFFF]")}>{language? "Got a question or proposal, or just want to say hello? Go ahead." : body}</p>
                <p className={"text-[20px] mb-[2rem] underline font-medium " + (mode ? "text-[#4731D3]" : "text-[#8F88FF]")}>almilasucode@gmail.com</p>    
                <div className={' fa-xl ' + (mode ? "text-[#4731D3]" : "text-[#8F88FF]")}>
                    <FontAwesomeIcon icon={faXTwitter} className=' pr-[24px]'/>
                    <FontAwesomeIcon icon={faCodepen} className=' pr-[24px]'/>
                    <FontAwesomeIcon icon={faAt} className=' pr-[24px]'/>
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>

        </div>
    );
}

