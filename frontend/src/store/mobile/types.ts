
export interface MobileEntity {
    id: number;
}

export interface MobileState {
    items: MobileEntity[]
    loading: boolean
    hasError: boolean
}