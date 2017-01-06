import { connect } from 'react-redux'
import View from '../components/View'

const mapStateToProps = (state) => ({
  numbers: state.number
})

const NumberTracker = connect(
  mapStateToProps
)(View)

export default NumberTracker
