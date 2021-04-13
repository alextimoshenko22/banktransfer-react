import React from 'react'
import CardsForm from './CardsForm'
import { addTransfer } from '../../redux/main-reducer'
import { connect } from 'react-redux'


class CardsContainer extends React.Component {
    render() {
        return <div>
            <CardsForm addTransfer={this.props.addTransfer} />
        </div>
    }
}

export default connect(null, {addTransfer})(CardsContainer)