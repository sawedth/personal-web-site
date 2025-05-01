import React from 'react';
import { useSelector } from 'react-redux';
export default function Skills(){
    const headerSkills = useSelector((store) => store.tr.profile.head)
    const skills = useSelector((store) => store.skills)
    const logos = useSelector((store) => store.logos)

    return (
        <div className="skills px-[20%] h-[610px]">
            <div className="py-[10%] h-[100%] flex justify-between">
                <h1 className='h-[100%] w-[20%] text-left text-[48px] text-[#4731D3]'>Skills</h1>
                <div className='flex flex-col flex-wrap items-start justify-between w-[60%] content-between'>
                {skills.map((skill, index) => {
                    return (
                        <div className='flex h-[30%] w-[40%] items-center' key={index}>
                            
                            <img src={logos[index]} key={index+"logo"} alt={'skill' + index} className='w-[120px] h-[120px] object-cover rounded-[5px] mr-[5%]'></img>
                            <h1>{skill}</h1>
                        </div>
                    );
                })}
                </div>
            </div>

        </div>
    );
}