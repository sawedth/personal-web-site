import './Header.css'
import almilaPhoto from '../assets/almila.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModeContext } from '../contexts/modeContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
export default function Header() {
    const {changeLanguage, changeMode, language, mode} = useContext(ModeContext);
    const translate = useSelector((store) => store.tr.header.translate);
    const languageName = useSelector((store) => store.tr.header.languageName);
    const head = useSelector((store) => store.tr.header.head);
    const body = useSelector((store) => store.tr.header.body);
    console.log(mode);
    return (
        <div className={"header h-[671px] px-[16%]" + (mode ? "" : " koyu")}>
            <div className="preferances flex  justify-end  pt-[1rem]">
                    {language && <span className={( mode ? "text-[#a69ffffc] " : "text-[#777777] " ) + ' mr-[45px] cursor-pointer header-lan'} onClick={() => changeLanguage()}><span className={(mode ? 'text-[#CBF281]' : 'text-[#8F88FF]')+ ""}>TÜRKÇE</span>'YE GEÇ </span>}
                    {!language && <span className={( mode ? "text-[#a69ffffc] " : "text-[#777777] ") + ' mr-[45px] cursor-pointer header-lan'} onClick={() => changeLanguage()}>{translate}<span className={(mode ? 'text-[#CBF281]' : 'text-[#8F88FF]')+ ""}>{languageName}</span></span>}
                <label className="switch " >
                    <input type="checkbox" onClick={() => changeMode()} checked={mode? true: false}/>
                    <span className="slider round"></span>
                    <input type="checkbox" onClick={() => changeMode()} checked={mode? true: false}/>
                    <span className="slider-two round mini"></span>
                </label>
                <span className={(mode ? "text-[#4731D3] " : "text-[#D9D9D9] ") +' ml-[3px] text-[15px] font-bold tracking-wide mode-switch '}>{mode ? "DARK MODE" : "LIGHT MODE"}</span>
            </div>
            <h1 className='text-[#CBF281] text-left text-[2rem] py-[12px]'>almila</h1>
            <div className='personal-info h-[50%] flex flex-row justify-between mt-[2rem] '>
                <div className='personal-exp pt-[4rem] text-left flex flex-col w-[60%] justify-between m-[0px]'>
                    <h1 className='text-[#CBF281] text-[54px] text-base/14 font-bold header-head'>{language ? "I am a Frontend Developer..." : head}</h1>
                    <p className='text-[white] text-[24px] header-para'> {language ? "...who likes to craft solid and scalable frontend products with great user experiences." : body}</p>
                    <div className='header-buttons'>
                        <button className={(mode ? "bg-white text-[#4731D3] " : "bg-[#252128] text-[#FFFFFF] ") + ' mr-[1rem] py-[12px] pr-[20px] pl-[12px]  cursor-pointer  text-[18px] border rounded-[6px]'}><FontAwesomeIcon icon={faGithub} className='fa-xl pr-[5px]'/>Github</button>
                        <button className={(mode ? "bg-white text-[#4731D3] " : "bg-[#252128] text-[#FFFFFF] ") + '  py-[12px] pr-[20px] pl-[12px]  cursor-pointer  text-[18px] border rounded-[6px]'}><FontAwesomeIcon icon={faLinkedin} className='fa-xl pr-[5px]'/>Linkedin</button>
                    </div>

                </div>
                <img src={almilaPhoto} alt='photo' className='h-[100%] w-[350px] object-cover rounded-[18px] header-photo'></img>
            </div>

        </div>
    );
}