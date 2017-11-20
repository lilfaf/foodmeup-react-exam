// @flow

import { connect } from 'react-redux';
import JediList from './JediList.component';
import { fetchJedi } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    jedi: state.jedi,
  };
}

const mapDispatchToProps = {
  fetchJedi,
};

export default connect(mapStateToProps, mapDispatchToProps)(JediList);
