//Reducer

import { localStorageAPI } from '../api/api'

//Action Types

const ADD_TRANSFER_SUCCESS = 'main-reducer/ADD_TRANSFER_SUCCESS'
const DELETE_TRANSFER_SUCCESS = 'main-reducer/DELETE_TRANSFER_SUCCESS'
const SET_ALL_TRANSFERS_SUCCESS = 'main-reducer/SET_ALL_TRANSFERS_SUCCESS'

//Initial State

let initialState = {
    transfers: [],
}

//Reducer

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSFER_SUCCESS: {
            return {
                ...state,
                transfers: [...state.transfers, action.transfer]
            }
        }
        case DELETE_TRANSFER_SUCCESS: {
            return {
                ...state,
                transfers: state.transfers.filter(t => t.transferId !== action.transferId)
            }
        }
        case SET_ALL_TRANSFERS_SUCCESS: {
            return {
                ...state,
                transfers: [...action.transfers]
            }
        }
        default:
            return state;
    }
}

//Action Creators
export const addTransferSuccess = (transfer) => ({type: ADD_TRANSFER_SUCCESS, transfer})

export const deleteTransferSuccess = (transferId) => ({type: DELETE_TRANSFER_SUCCESS, transferId})

export const setTransfersSuccess = (transfers) => ({type: SET_ALL_TRANSFERS_SUCCESS, transfers})
//THUNK

export const addTransfer = (sum, name, lastName, cardNumber, date, clientCard) => (dispatch) => {
    const transfer = {
        transferId: Date.now(),
        sum: sum,
        name: name, 
        lastName: lastName, 
        cardNumber: cardNumber, 
        clientCard: clientCard,
        date: date
    }
    localStorageAPI.setItem(transfer)
    dispatch(addTransferSuccess(transfer))
}

export const getAllTransfers = () => (dispatch) => {
    const transfers = localStorageAPI.getAllTransfers()
    dispatch(setTransfersSuccess(transfers))
}

export const deleteTransfer = (transferId) => (dispatch) => {
    localStorageAPI.deleteTransfer(transferId)
    dispatch(deleteTransferSuccess(transferId))
}

export default mainReducer;