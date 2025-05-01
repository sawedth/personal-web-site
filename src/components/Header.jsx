import './Header.css'
import almilaPhoto from '../assets/almila.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModeContext } from '../contexts/modeContext';
import { useContext } from 'react';
export default function Header() {
    const {changeLanguage, changeMode, language, mode} = useContext(ModeContext);
    return (
        <div className="header h-[671px] px-[20%]">
            <div className="preferances flex  justify-end  pt-[1rem]">
                <span className='text-white mr-[5%] cursor-pointer' onClick={() => changeLanguage()}><span className='text-[#CBF281]'>TÜRKÇE</span>'YE GEÇ</span>
                <label className="switch " >
                    <input type="checkbox" onClick={() => changeMode()} checked={mode? false: true}/>
                    <span className="slider round"></span>

                </label>
                <span className=' ml-[3px] text-[#4731D3]'>DARK MODE</span>
            </div>
            <h1 className='text-[#CBF281] text-left text-[2rem] py-[12px]'>almila</h1>
            <div className='personal-info h-[50%] flex flex-row justify-between mt-[2rem] '>
                <div className='personal-exp pt-[4rem] text-left flex flex-col w-[60%] justify-between m-[0px]'>
                    <h1 className='text-[#CBF281] text-[54px] text-base/14 font-bold'>I am a Frontend Developer...</h1>
                    <p className='text-[white] text-[24px]'> ...who likes to craft solid and scalable frontend products with great user experiences.</p>
                    <div className='header-buttons'>
                        <button className='py-[12px] pr-[20px] pl-[12px] bg-white cursor-pointer text-[#4731D3] text-[18px] border rounded-[6px] mr-[10px]'><FontAwesomeIcon icon={faGithub} className='fa-xl pr-[5px]'/>Github</button>
                        <button className='py-[12px] pr-[20px] pl-[12px] bg-white cursor-pointer text-[#4731D3] text-[18px] border rounded-[6px]'><FontAwesomeIcon icon={faLinkedin} className='fa-xl pr-[5px]'/>Linkedin</button>
                    </div>

                </div>
                <img src={almilaPhoto} alt='photo' className='h-[100%] w-[350px] object-cover rounded-[18px]'></img>
            </div>

        </div>
    );
}