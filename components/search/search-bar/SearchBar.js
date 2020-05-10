import React, { Component } from 'react'
import SearchCore from '../SearchCore'
import { Affix } from 'antd'
import { Collapse } from 'reactstrap'

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            isFilterOpen : false
        }
    }
    toggleFilter = () => this.setState(prevState => ({isFilterOpen: !prevState.isFilterOpen}))
    render() {
        const {
            isFilterOpen
        } = this.state
        return (
            // <Affix offsetTop={0}>
                <div className="c-search-bar bg-dark">
                    <div className="container p-3">
                        <div className="row">
                            <div className="col-lg-11">
                                <SearchCore />
                            </div>
                            <div className="col-lg-1">
                                <button onClick={this.toggleFilter} className="btn btn-block btn-outline-primary">
                                    filter
                                </button>
                            </div>
                            <div className="col-md-12">
                                <Collapse isOpen={isFilterOpen} >
                                    <hr />
                                    {/* <div className="pt-4" /> */}
                                    <div className="c-search-bar__filters">

                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className="container-fulid">
                        
                    </div>
                </div>
            // </Affix>
        )
    }
}

export default SearchBar