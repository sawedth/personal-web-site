import { useSelector } from "react-redux";
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";
import { ModeContext } from '../contexts/modeContext';
import { useContext } from 'react';
export default function Projects() {
    const projects = useSelector((store) => store.tr.projects);
    const { language, mode } = useContext(ModeContext);
    return (
        <div className={"projects w-[100%]  pt-[2rem] pb-[3rem] px-[16%] " + (mode ? "bg-[#CBF281]" : "bg-[#1A210B]")}>
            <h1 className={"text-left  text-[48px] font-bold mb-[1rem] " + (mode ? "text-[#4731D3]" : "text-[#CBF281]")}>{language ? "Projects" : "Projelerim"}</h1>
            <div className={"w-[%100] min-h-[360px]  flex rounded-[12px] items-center mb-[3rem] py-[5px] shadow-md  " + (mode ? "bg-white" : "bg-[#2B2727]")}>
                <img src={app1} key="app1" alt="app1" className='w-[360px] h-[360px] object-cover rounded-l-[5px] mr-[2rem]' />
                <div className="m-[2rem] flex flex-col">
                    <h2 className={"text-left  text-[32px] pb-[1rem] w-[100%] pt-[2rem] font-bold text-[#4731D3] " + (mode ? "text-[#4731D3]" : "text-[#C1BAED]")}>Workintech</h2>
                    <p className={"font-normal text-left  text-[16px] pb-[2rem] w-[100%] font-normal " + (mode ? "text-[#383838]" : "text-[#FFFFFF]")}>
                        {language ? "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible." : projects[0]}
                    </p>
                    <div className="text-left pb-[1rem]">
                        <span className={"pt-[8px] pb-[9px] px-[18px] text-white  mr-[16px] rounded-[23px] text-[14px] " + (mode ? "bg-[#4731D3]" : "bg-[#8173DA]")}>react</span>
                        <span className={"pt-[8px] pb-[9px] px-[18px] text-white  mr-[16px] rounded-[23px] text-[14px] " + (mode ? "bg-[#4731D3]" : "bg-[#8173DA]")}>redux</span>
                        <span className={"pt-[8px] pb-[9px] px-[18px] text-white  mr-[16px] rounded-[23px] text-[14px] " + (mode ? "bg-[#4731D3]" : "bg-[#8173DA]")}>vercel</span>
                    </div>
                    <div className="text-left mb-[1rem]">
                        <a href="/" className={"text-16px underline  mr-[2rem] " + (mode ? "text-[#120B39]" : "text-[#CBF281]")}>{language ? "View Site" : "Siteyi Göster"}</a>
                        <a href="/" className={"text-16px underline  mr-[2rem] " + (mode ? "text-[#120B39]" : "text-[#CBF281]")}>Github</a>
                    </div>
                </div>
            </div>

            <div className={"w-[%100] min-h-[360px]  flex rounded-[12px] items-center mb-[3rem] py-[5px] shadow-md  " + (mode ? "bg-white" : "bg-[#2B2727]")}>
                <img src={app2} key="app2" alt="app2" className='w-[360px] h-[360px] object-cover rounded-l-[5px] mr-[2rem] ' />
                <div className="m-[2rem] flex flex-col">
                    <h2 className={"text-left  text-[32px] pb-[1rem] w-[100%] pt-[2rem] font-bold text-[#4731D3] " + (mode ? "text-[#4731D3]" : "text-[#C1BAED]")}>Journey</h2>
                    <p className={"font-normal text-left  text-[16px] pb-[2rem] w-[100%] font-normal " + (mode ? "text-[#383838]" : "text-[#FFFFFF]")}>
                        {language ? "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible." : projects[1]}
                    </p>
                    <div className="text-left pb-[1rem]">
                        <span className={"pt-[8px] pb-[9px] px-[18px] text-white  mr-[16px] rounded-[23px] text-[14px] " + (mode ? "bg-[#4731D3]" : "bg-[#8173DA]")}>react</span>
                        <span className={"pt-[8px] pb-[9px] px-[18px] text-white  mr-[16px] rounded-[23px] text-[14px] " + (mode ? "bg-[#4731D3]" : "bg-[#8173DA]")}>redux</span>
                        <span className={"pt-[8px] pb-[9px] px-[18px] text-white  mr-[16px] rounded-[23px] text-[14px] " + (mode ? "bg-[#4731D3]" : "bg-[#8173DA]")}>vercel</span>
                    </div>
                    <div className="text-left mb-[1rem]">
                        <a href="/" className={"text-16px underline  mr-[2rem] " + (mode ? "text-[#120B39]" : "text-[#CBF281]")}>{language ? "View Site" : "Siteyi Göster"}</a>
                        <a href="/" className={"text-16px underline  mr-[2rem] " + (mode ? "text-[#120B39]" : "text-[#CBF281]")}>Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}