export function Card({
    title,
    additionalInfo,
    image,
    prices,
    description,
    features,
}){
    return (
        <div>
            <h2>{title}</h2>
            <div>{additionalInfo}</div>
            <img src={image} />
            <Pricing 
                {...prices}
            />
            <p>{description}</p>
            <Features 
                {...features}
            />
        </div>

    );
}

function Pricing(){
    return (
        <div>
            
        </div>
    );
}

function Features(){

}