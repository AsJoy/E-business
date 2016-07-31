import React from 'react';
import '../../css/toast.css';

const
  Component = React.Component,
  PropTypes = React.PropTypes;

class Toast extends Component {
  componentDidUpdate() {
    const
      self = this,
      boxNode = this.refs.toastBox,
      duration = 2100;

    if (boxNode) {
      boxNode.style.cssText = `animation-duration: ${duration}ms`;
      setTimeout(() => {
        self.closeToast();
      }, duration - 100);
    }
  }

  closeToast() {
    this.props.doAction('UPDATE_TOAST', {
      text: ''
    });
  }

  render() {
    const obj = this.props.data;

    if (obj.text) {
      return (
        <div>
          <div id="toastBg" className="toastBg"></div>
          <div id="toastBox" ref="toastBox" className="toastBox">
            <div
              id="toastText"
              className="toastText"
              dangerouslySetInnerHTML={{ __html: obj.text }}
            >
            </div>
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}

Toast.propTypes = {
  data: PropTypes.object.isRequired,
  doAction: PropTypes.func.isRequired
};

export default Toast;
