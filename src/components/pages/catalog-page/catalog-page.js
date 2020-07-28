import React, {Component} from 'react'
import withService from "../../hoc/with-service";
import "./catalog-page.sass"
import {Catalog} from "./catalog/catalog";
import {connect} from "react-redux";
import {createCurrentDevice, fetchCurrentDevice, fetchDevices} from "../../../actions";
import {withRouter} from "react-router-dom";
import FilterComponent from "./filter-component/filter-component";

class CatalogPage extends Component {

    componentDidMount() {
        this.fetchDevices()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id){
            this.fetchDevices();
        }
    }

    fetchDevices = () => {
        const { fetchDevices, id, catalog:{data={}} } = this.props;
        if(data[this.props.id]) return;
        fetchDevices(id)
    };

    render(){
        const {catalog: {loading, data}, id } = this.props;

        let newData = this.props.filterCatalog.filterActive ? this.props.filterCatalog.filteredDevices : data[id];

        if(loading === true) return <div>Loading...</div>;

        return(
            <>
                <div className="sidebar">
                    <FilterComponent id={id}/>
                </div>
                <div className={"wrapper"}>
                    <div className="wrap">
                        <Catalog data = {newData}/>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ catalog,filterCatalog }) => {
    return { catalog,filterCatalog }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        fetchDevices: (id) => fetchDevices(service.getDevices, dispatch, id),
    }
};

export default (
    withRouter(
        withService(
            connect(mapStateToProps, mapDispatchToProps)(CatalogPage)
        )
    )
)

