export const serviceOrderOutput = (data:Array<object>) =>{
    return data.map((service:any)=>{
        return {
            id: service.id,
            title: service.title,
            description: service.description,
            price: service.price,
            createdAt:service.createdAt,
            provider:{
                providerId:service.user.id,
                providerName:service.user.fullName
            }
           
        }
    })
}



export const hiringOrderOutput = (data:Array<object>) =>{
    return data.map((hire:any)=>{
        return {
            id: hire.id,
            service: hire.service.title,
            amount: hire.amount,
            costumer: hire.costumer.fullName,
            provider: hire.provider.fullName,
            hiringDate: hire.createdAt,
        }
    })
}


export const serviceOnwerOrderOutput = (data:Array<object>) =>{
    return data.map((service:any)=>{
        return {
            id: service.id,
            title: service.title,
            description: service.description,
            price: service.price,
            status: service.status ? 'ACTIVADO' :'DESACTIVADO',
            createdAt:service.createdAt,
           
        }
    })
}
