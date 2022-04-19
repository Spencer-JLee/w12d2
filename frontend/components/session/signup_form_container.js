import { connect } from "react-redux";
import { receiveErrors, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);