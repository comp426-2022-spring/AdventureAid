function CountryButton(props) {
    const country = props.country
    return ( 
        <div>
            <li key = {country} style={{listStyle: "none"}}>
                <b><button onClick={props.clickCountryHandler} className="button-1" style={{marginBottom: 20}}>{country}</button></b>
                <div> <img width="130" style={{marginBottom: 20}} src={'https://countryflagsapi.com/png/' + country}></img> </div>
            </li>
        </div>
     );
}

export default CountryButton;