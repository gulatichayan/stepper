import { connect } from 'react-redux'
import { setParts } from './actionCreators'

import Page1 from '../../components/page1';

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.page1.parts,
  }
};

const mapDispatchToProps = {
    setParts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);