import { combineReducers } from "redux"
// import { Marketplace } from '../../typechain-types/contracts/Marketplace'
// import { Minter } from '../../typechain-types/contracts/Minter'

interface Actions{
    type: string,
    item: {
        name: string,
        description: string,
        image: string,
        index: string,
        price: string
    }
}



export const itemData  = (state = {}, action: Actions)=>{
    switch(action.type){
        case "SET_ITEM":
            return action.item
        default:
            return state
    }
}

export const category = (state = '', action: {type: string, category: string})=>{
    switch(action.type){
        case "SET_CATEGORY":
            return state = action.category
        default:
            return state
    }
}

export const account = (state = "", action: {type: string, account: any} )=>{
    switch(action.type){
        case "SAVE_ACCOUNT":
            return state = action.account
        default:
            return state
    }
}

export const marketplaceContract= (state: any | undefined = "", action: {type: string, contractInstance: any | undefined})=>{
    switch(action.type){
        case "SAVE_MARKETPLACE_CONTRACT":
            return state = action.contractInstance;
        default:
            return state
    }
}

export const minterContract = (state: any | undefined = "", action: {type: string, contractInstance: any | undefined})=>{
    switch(action.type){
        case "SAVE_MINTER_CONTRACT":
            return state = action.contractInstance;
        default:
            return state
    }
}

export const checkoutPopupState = (state = false, action: {type: string}) =>{
    switch(action.type){
        case "ACTIVATE_POPUP":
            return true
        case "DEACTIVATE_POPUP":
            return false
        default:
            return state
    }
}

export const allReducers = combineReducers({
    itemData,
    category,
    account,
    marketplaceContract,
    minterContract,
    checkoutPopupState
})