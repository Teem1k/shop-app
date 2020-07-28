import React from 'react';
import {connect} from "react-redux";
import {filterActive, filterDeactivate, filterDevices, maxPrice, minPrice} from "../../../../actions";

const FilterComponent = (props) => {

    const minPrice = (event) => {
        props.minPrice(event.target.value)
    };
    const maxPrice = (event) => {
        props.maxPrice(event.target.value)
    };
    const onSubmit = (e) => {
        props.filterDevices();
        props.filterActive();
        e.preventDefault()
    };
    const Deactivate = () => {
        props.filterDeactivate();
    };

    return(
        <div>
            <div className={"setFilter"}>
                <form onSubmit={onSubmit} action="">
                    <input type="number" min={0} value = {props.filterCatalog.minPrice} onChange={minPrice} />
                    <input type="number" min={0} value = {props.filterCatalog.maxPrice} onChange={maxPrice} />
                    <input type="submit" value={'Filter'}/>
                </form>
            </div>
            <button className={"resetFilter"} onClick={Deactivate}>Reset filter</button>
        </div>
    )

};

const mapStateToProps = ({ filterCatalog }) => {
    return { filterCatalog }
};

const mapDispatchToProps = ( dispatch,ownProps ) => {
    return {
        filterDevices: () => dispatch(filterDevices(ownProps.id)),
        minPrice: (value) => dispatch(minPrice(value)),
        maxPrice: (value) => dispatch(maxPrice(value)),
        filterActive: () => dispatch(filterActive()),
        filterDeactivate: () => dispatch(filterDeactivate())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);