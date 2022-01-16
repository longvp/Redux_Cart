import React from 'react';
import message from '../reducers/message';
import Message from "../components/Message";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class MessageContainer extends React.Component {
    render() {
        return (
            <Message message={this.props.message} />
        )
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
    }
}

const mapDispatchToProps = (dispatch, props) => {

}

export default connect(mapStateToProps, null)(MessageContainer);