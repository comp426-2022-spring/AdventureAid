function CountryButton(props) {
    const country = props.country

    function addDefaultSrc(ev) {
        ev.target.style.visibility = 'hidden'
    }
    return ( 
        <div>
            <li key = {country} style={{listStyle: "none"}}>
                <b><button onClick={() => props.clickCountryHandler(country)} className="button-1" style={{marginBottom: 20}}>{country}</button></b>
                <div> <img onError={addDefaultSrc} width="130" style={{marginBottom: 20}} src={'https://countryflagsapi.com/png/' + country}></img> </div>
            </li>
        </div>
     );
}

export default CountryButton;