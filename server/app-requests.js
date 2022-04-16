// Function to narrow down countries based on the vaccines a person has
function includeVaccinations(vaccinations, data) {
    let countries = []
    for (const element of data) {
        const countryVaccines = element.vaccinations
        let flag = true
        for (const vaccine of countryVaccines) {
            if (!vaccinations.has(vaccine.name)) {
                flag = false
                break
            }
        }
        if (flag) {
            countries.push(element)
        }
    }
    return countries
}

// Function to narrow down countries based on the languages a person knows
function includeLanguages(languages, data) {
    let countries = []
    for (const element of data) {
        const countryLanguages = element.language
        for (const language of countryLanguages) {
            if (languages.has(language.language)) {
                countries.push(element)
                break
            }
        }
    }
    return countries
}

export { includeVaccinations, includeLanguages }