import { connect } from 'react-redux';
import Home from './Home';
import {
  getCharacter
} from './action';

const mapStateToProps = state => ({
  charaterData: state.HomeReducer.charaterData
});
const mapDispatchToProps = {
  getCharacter
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
