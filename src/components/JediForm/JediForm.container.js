// @flow

import { connect } from 'react-redux';
import { addJedi } from '../../redux/actions';
import JediForm from './JediForm.component';

const mapDispatchToProps = {
  addJedi,
};

export default connect(null, mapDispatchToProps)(JediForm);
