// @flow

import { connect } from 'react-redux';
import { addJedi } from '../../action';
import JediForm from './JediForm.component';

const mapDispatchToProps = {
  addJedi,
};

export default connect(null, mapDispatchToProps)(JediForm);
