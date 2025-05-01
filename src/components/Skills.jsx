import React from 'react';
import { useSelector } from 'react-redux';
import { ModeContext } from '../contexts/modeContext';
import { useContext } from 'react';
export default function Skills(){
    const headerSkills = useSelector((store) => store.tr.profile.head)
    const skills = useSelector((store) => store.skills)
    const logos = useSelector((store) => store.logos)
    const {language, mode} = useContext(ModeContext);
    return (
        <div className={"skills px-[16%] h-[610px] " + (mode ? "" : " bg-[#252128]")}>
            <div className="py-[10%] h-[100%] flex justify-between">
                <h1 className='h-[100%] w-[20%] text-left text-[48px] text-[#4731D3]'>{language ? "Skills" : "Yeteneklerim"}</h1>
                <div className='flex flex-col flex-wrap items-start justify-between w-[60%] content-between min-h-[400px] max-h-[420px]'>
                {skills.map((skill, index) => {
                    return (
                        <div className='flex h-[30%] w-[40%] items-center mb-[10px]' key={index}>
                            
                            <img src={logos[index]} key={index+"logo"} alt={'skill' + index} className='w-[120px] h-[120px] object-cover rounded-[5px] mr-[20px] '></img>
                            <h1 className={" text-[24px] " + (mode ? "text-[#777777]":"text-white")}>{skill}</h1>
                        </div>
                    );
                })}
                </div>
            </div>

        </div>
    );
}