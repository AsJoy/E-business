import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import Index from '../../components/entry/index'
import * as appActions from '../../actions/entryAction';
import '../../../css/app.css'
import styles from '../../../css/shopcart/address.pcss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { actions } = this.props;
    actions.loadIndex();
  }
  render() {
    const { toastReducers, actions,indexReduce } = this.props;
    console.log(indexReduce)
    return (
      <div>
        <Index {...this.props}/>
        <Toast data={toastReducers.toastObj} doAction={actions.actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object,
  shopReduce: PropTypes.object,
  indexReduce: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    indexReduce: state.indexReduce,
    shopReduce: state.shopReduce
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
