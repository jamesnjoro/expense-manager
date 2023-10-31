import _ from 'lodash'
export const authorizeById = (ids: number|Array<number> = []) => {
    return {
        where: {
            id: ids
        }
    }
}

export const authorizeByExpenditureId = (ids: number|Array<number> = []) => {
    return {
        where: {
            expenditureId: ids
        }
    }
}