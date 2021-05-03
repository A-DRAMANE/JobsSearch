import React from 'react'
import SwitchJobsPage from './SwitchJobsPage'
import '../css/SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">

            <div className="panner">
                <div className="panner-contain">
                    <input
                        type="text"
                    />
                    <button>Search</button>
                </div>
            </div>
            <div className="smain">
                <div className="search-main">
                    <div className="typeJob">
                        <input type="checkbox" name="scales"
                                />
                        <label for="scales"> Full time</label>
                    </div>
                    <div className="input">
                        <h3>LOCATION</h3>
                        <input
                            type="text"
                        />
                    </div>

                    <div className="radio">
                        <div className="input-radio">
                            <input type="radio" id="local" name="London"
                                    />
                            <label for="London"> London</label>
                        </div>

                        <div className="input-radio">
                            <input type="radio" id="local" name="amsterdam"/>
                            <label for="amsterdam"> Amsterdam</label>
                        </div>
                        <div className="input-radio">
                            <input type="radio" id="local" name="york"
                                    />
                            <label for="york"> New York</label>
                        </div>

                        <div className="input-radio">
                            <input type="radio" id="local" name="berlin"/>
                            <label for="berlin"> Berlin</label>
                        </div>
                    </div>
                        
                    
                </div>
                <SwitchJobsPage/>
            </div>
            SearchPage
            
        </div>
    )
}

export default SearchPage
