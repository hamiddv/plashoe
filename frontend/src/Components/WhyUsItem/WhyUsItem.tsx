import {JSX} from "react";


interface WhyUsItemProps{
    icon: JSX.Element;
    text: string;


}

export function WhyUsItem({icon, text}: WhyUsItemProps) {
    return (
        <>
            <div className={"flex items-center my-6 mx-4"}>
                {icon}
                <span className={"ml-4 text-lg"}>{text}</span>
            </div>
        </>
    );
}