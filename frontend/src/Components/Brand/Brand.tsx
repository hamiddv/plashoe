interface BrandProps{
    imgSrc: string;
}

export function Brand({imgSrc}: BrandProps) {
    return (
        <>
            <div className="flex w-6/12 md:w-auto justify-center">
                <img src={imgSrc} alt={"brand"}/>
            </div>
        </>
    );
}