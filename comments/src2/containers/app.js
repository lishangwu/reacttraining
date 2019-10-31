import React from 'react'

import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from '../redux/action'
import Counter from '../components/counter'

export default connect(
    state=>({count:state}), {increment, decrement, incrementAsync}
)(Counter)