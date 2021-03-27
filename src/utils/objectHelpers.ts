import {UsersType} from "../types/types";

export const updateObjectInArray = (items: Array<UsersType>, itemId: number, objPropName: string, newObjProps: {}) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    });
};