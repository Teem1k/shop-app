import React, { Component } from 'react';
import {connect} from 'react-redux';
import withService from "../hoc/with-service";
import {Catalog} from "../pages/catalog-page/catalog/catalog";
import {fetchBestSales} from "../../actions";
import './best-sales.css'

class BestSales extends Component{

    componentDidMount() {
        this.props.fetchBestSales()
    }

    render() {

        console.log(this.props);
        const { bestSales:{ list=[] }=[] } = this.props;
        return(
            <div className={'best-sales-wrapper'}>
                <div className={'wrap'}>
                    <div className="page-title">Best sales</div>
                    <Catalog data={ list }/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ bestSales }) => {
    return { bestSales }
};
const mapDispatchToProps = ( dispatch,ownProps ) => {
    const {service} = ownProps;
    return {
        fetchBestSales: () => fetchBestSales( service.getBestSales,dispatch )
    }
};

export default withService(connect(mapStateToProps,mapDispatchToProps)(BestSales))