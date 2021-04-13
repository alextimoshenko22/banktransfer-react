//DAL уровень на основе localStorage

export const localStorageAPI = {
    sortByItemId(items) {
        items.sort((a, b) => a.itemId > b.itemId ? 1 : -1)
    },

    setItem(transfer) {
        localStorage.setItem(transfer.transferId, JSON.stringify(transfer))
    },

    getItem(transferId) {
        return JSON.parse(localStorage.getItem(transferId))
    },

    deleteTransfer(transferId) {
        localStorage.removeItem(transferId)
    },

    getAllTransfers() {
        let transfers = [];
        for (let i = 0; i < localStorage.length; i++) {
            transfers.push(this.getItem(localStorage.key(i)))
        }
        this.sortByItemId(transfers)
        transfers.reverse()
        return transfers
    },
};