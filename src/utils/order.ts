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