import Card from "./Card";
import image from './placeHolderFlag.png'

function CountryButton(props) {
    const country = props.country

    return ( 
        <Card>
                <b><button onClick={() => props.clickCountryHandler(country)} className="button-1" style={{marginBottom: 20}}>{country}</button></b>
                <div> 
                    <img onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src=image;
                                    }} 
                        width="100" height="70" style={{marginBottom: 20}} src={'https://countryflagsapi.com/png/' + country}>
                    </img>
                </div>
        </Card>
     );
}

export default CountryButton;