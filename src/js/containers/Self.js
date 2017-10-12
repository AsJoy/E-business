import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../components/Toast.react'
import Self from '../components/self/Self'
import * as appActions from '../actions/SelfAction';
import '../../css/app.css'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toastReducers, actions,indexReduce } = this.props;
    console.log(indexReduce)
    return (
      <div>
        <Self  indexReduce={indexReduce} logout={actions.logout}/>
        <Toast data={toastReducers.toastObj} doAction={actions.updateToast} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    indexReduce: state.indexReduce
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
