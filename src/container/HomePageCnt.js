import { connect } from 'react-redux'
import HomePage from '../component/HomePage'
import { getCompanyForSelect_request, getShopsForCmp_request } from '../action/company.actions'
import { getLoggedUser_request } from '../action/login.action'
import { getWarehouseForUser_request } from '../action/warehouse.actions'

const mapStateToProps = state => ({
    companies: state.companyReducer.companies,
    shops: state.companyReducer.shops,
    error: state.companyReducer.error,
    warehouse: state.warehouseReducer.warehouse
})

const mapDispatchToProps = dispatch => ({
    //check user
     getLoggedUser: (token) => dispatch(getLoggedUser_request(token)),
    //get warehouse for user
    getWarehouse: (user) => dispatch(getWarehouseForUser_request(user)),
    //get comapies for select
    getCompaniesForSelect: () => dispatch(getCompanyForSelect_request()),
    //get shops for comapnies
    getShopsForCmp: (company_id) => dispatch(getShopsForCmp_request(company_id))
})

const HomePageCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

export default HomePageCnt