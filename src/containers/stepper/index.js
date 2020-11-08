import { connect } from 'react-redux'
import { setCurrentPage } from './actionCreators'

import Stepper from '../../components/stepper';

const mapStateToProps = (state, ownProps) => {
  return {
    pageNumber: ownProps.pageNumber,
    content: ownProps.content,
    currentPage: state.stepper.currentPage,
  }
};

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stepper);