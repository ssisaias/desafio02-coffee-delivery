export interface CommonProviderProps {
    children: React.ReactNode
}
export interface CoffeeInterface {
    id: string
    name: string
    description: string | null
    price: number
    tags: string[] | null
    image: string
}

export interface Cart {
    uuid: string
    createdDate: string
    items: CartItem[]
    total: number
    status: string
    deliveryAmount: number
    deliveryAddress: DeliveryAddress
    selectedPaymentMethod: string
}

export interface CartItem {
    CoffeeItem: CoffeeInterface
    quantity: number
}


export interface DeliveryAddress {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
}
