import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    let messagePage = state.messagePage
    return {
        MessageData: messagePage.MessageData,
        DialogsData: messagePage.DialogsData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageAC: (newMessageText) => {
            dispatch(sendMessageAC(newMessageText));
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);