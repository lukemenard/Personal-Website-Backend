import React from 'react'

const SearchBar = ( { filterProjectTechnology, filterProjectCategory } ) => {
    return (
        <div className="filter">
            <div className="category-filter">
                <label><strong>Filter Projects by Category: </strong></label>
                <select className="dropdown" onChange={(event) => filterProjectCategory(event.target.value)}>
                    <option value="All">All</option>
                    <option value="Software">Software</option>
                    <option value="Mapping">Mapping</option>
                    <option value="Software/Mapping">Software/Mapping</option>
                    <option value="Financial Modeling">Financial Modeling</option>
                    <option value="Writing">Writing</option>
                    
                </select>
            </div>
            <div className="technology-filter">
                <label><strong>Filter Projects by Technology: </strong></label>
                <select className="dropdown" onChange={(event) => filterProjectTechnology(event.target.value)}>
                    <option value="All">All</option>
                    <option value="Command Line Interface">Command Line Interface</option>
                    <option value="Excel">Excel</option>
                    <option value="GIS">GIS</option>
                    <option value="Google Earth Engine">Google Earth Engine</option>
                    <option value="Google Maps">Google Maps</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                    <option value="R">R</option>
                    <option value="Remote Sensing">Remote Sensing</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Ruby on Rails">Ruby on Rails</option>
                </select>
            </div>
        </div>

    )
}

export default SearchBar