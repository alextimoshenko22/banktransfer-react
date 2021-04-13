import React from 'react'
import HistoryTable from './HistoryTable'
import { getAllTransfers, deleteTransfer } from '../../redux/main-reducer'
import { connect } from 'react-redux'
import { getTransfersSelector } from '../../redux/main-selectors'


class HistoryTableContainer extends React.Component {
    componentDidMount() {
        this.props.getAllTransfers()
        console.log(this.props.transfers)
    }

    componentDidUpdate(prevProps) {
        if(this.props.transfers.length !== prevProps.transfers.length && prevProps.transfers.length !== 0) {
            this.props.getAllTransfers()
        }
    }
    
    render() {
        return <div>
            <HistoryTable transfers={this.props.transfers} deleteTransfer={this.props.deleteTransfer} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        transfers: getTransfersSelector(state)
    }
}

export default connect(mapStateToProps, { getAllTransfers, deleteTransfer })(HistoryTableContainer)