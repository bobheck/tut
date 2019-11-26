export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    address?: {
        street?: string,
        city?: string,
        state?: string,
        zip?: string
    },
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}