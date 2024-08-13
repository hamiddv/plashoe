interface HowProps {
    number: number;
    title: string;
    caption: string;
}

export function How({number, title, caption}: HowProps) {
    function formatNumber(number: number){
        return number < 10 ? `0${number}` : number
    }
    return (
        <>
            <div>
                <div>
                    <span className={"text-sm sm:text-left lg:text-base font-bold text-[#f6aa28]"}>
                        {formatNumber(number)}
                    </span>
                </div>
                <div>
                    <h6 className={"text-2xl"}>
                        {title}
                    </h6>
                </div>
                <div className={"my-2 sm:m-0"}>
                    <p className={"text-base lg:text-lg text-[#989A9B]"}>
                        {caption}
                    </p>
                </div>
            </div>
        </>
    );
}