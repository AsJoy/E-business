import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import Search from '../../components/entry/Search'
import BackTop from '../../components/BackTop.react'
import * as appActions from '../../actions/entryAction';
import '../../../css/app.css'
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // const { actions } = this.props;
    // actions.loadSearch();
  }
  render() {
    const { toastReducers, actions } = this.props;
    console.log(...this.props)
    return (
      <div>
        <Search {...this.props}/>
        <Toast data={toastReducers.toastObj} doAction={actions.actions} />
        <BackTop  />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object,
  shopReduce: PropTypes.object,
  searchReducer: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    shopReduce: state.shopReduce,
    searchReducer: state.searchReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
