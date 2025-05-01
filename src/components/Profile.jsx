import styled from "styled-components";
import working from "../assets/working.png"
import { ModeContext } from '../contexts/modeContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
const Profiled = styled.div`
    
    height: 552px
`;
export default function Profile() {
    const {language, mode} = useContext(ModeContext);
    const head = useSelector((store) => store.tr.profile.head);
    const info = useSelector((store) => store.tr.profile.info);
    const date = useSelector((store) => store.tr.profile.date);
    const city = useSelector((store) => store.tr.profile.city);
    const education = useSelector((store) => store.tr.profile.education);
    const uni = useSelector((store) => store.tr.profile.uni);
    const preferred = useSelector((store) => store.tr.profile.preferred);
    const about = useSelector((store) => store.tr.profile.about);
    return (
        <Profiled className={"px-[16%] py-[5%] text-[48px] text-[#CBF281]  " + (mode ? "bg-[#4731D3]" : "bg-[#171043]")}>

            <h1 className="text-left pb-[1rem]">{language ? "Profile" : head}</h1>

            <div className="flex w-[100%] text-left ">
                <div className="flex flex-col flex-wrap min-w-[300px] w-[40%] justify-between max-h-[400px]">
                    <h1 className=" text-[28px] text-white w-[250px] mb-[.5rem]">{language? "Basic Information":info}</h1>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%]">{language ? "Date of Birth" : date}</p>
                        <p className="text-[16px] text-white">24.03.1996</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%] h-[46px]">{language ? "City":city}</p>
                        <p className="text-[16px] text-white">Ankara</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%]">{language ? "Educational Background" : education}</p>
                        <p className="text-[16px] text-white w-[50%]">{language ? "Hacettepe University Biology Bachelor, 2016" : uni}</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%]">{language ? "Preferred Role" : preferred}</p>
                        <p className="text-[16px] text-white">Frontend, UI</p>
                    </div>
                </div>
                <img alt="working" src={working} className='w-[300px] h-[290px] object-cover rounded-[5px] mx-[36px]' />
                <div className="max-h-[400px]">
                    <h1 className=" text-[28px] text-white mb-[1rem]">{language ? "About Me" : about}</h1>
                    <p className="text-[16px] text-white mb-[1rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. </p>
                    <p className="text-[16px] text-white ">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                </div>
            </div>
        </Profiled>
    );
}