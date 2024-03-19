import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
const SearchCountResult = ({ title }) => {
    const handler = () => {

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile ">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p>
                            <img width="20px" height="20px" className="ms-1" src={sort} alt="" />
                            sort by
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter me-5">
                        <div className="border-bottom card-filter-item">  best seller </div>
                        <div className="border-bottom card-filter-item">Highest rated </div>
                        <div className="border-bottom card-filter-item">
                        Price from lowest to highest
                        </div>
                        <div className=" card-filter-item">Price from highest to lowest</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
