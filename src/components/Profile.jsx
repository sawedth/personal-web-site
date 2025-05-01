import styled from "styled-components";
import working from "../assets/working.png"
const Profiled = styled.div`
    background-color: #4731D3;
    height: 552px
`;
export default function Profile() {
    return (
        <Profiled className="px-[20%] py-[5%] text-[48px] text-[#CBF281]">

            <h1 className="text-left pb-[1rem]">Profile</h1>

            <div className="flex w-[100%] text-left ">
                <div className="flex flex-col flex-wrap w-[50%] justify-between">
                    <h1 className=" text-[28px] text-white w-[250px] mb-[.5rem]">Basic Information</h1>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%]">Date of Birth</p>
                        <p className="text-[16px] text-white">24.03.1996</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%] h-[46px]">City</p>
                        <p className="text-[16px] text-white">Ankara</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%]">Educational Background</p>
                        <p className="text-[16px] text-white w-[50%]">Hacettepe University Biology Bachelor, 2016</p>
                    </div>
                    <div className="flex ">
                        <p className="text-[16px] pr-[10px] w-[50%]">Preferred Role</p>
                        <p className="text-[16px] text-white">Frontend, UI</p>
                    </div>
                </div>
                <img alt="working" src={working} className='w-[300px] h-[290px] object-cover rounded-[5px] mx-[24px]' />
                <div className="w-">
                    <h1 className=" text-[28px] text-white mb-[.5rem]">About Me</h1>
                    <p className="text-[16px] text-white mb-[.5rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. </p>
                    <p className="text-[16px] text-white ">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                </div>
            </div>
        </Profiled>
    );
}