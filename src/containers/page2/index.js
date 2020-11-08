import { connect } from 'react-redux'

import Page2 from '../../components/page2';

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.page1.parts,
  }
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page2);