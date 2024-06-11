const formatCurrency = (value?:number) =>{
    if(!value){
        return
    }
    return `R$ ${value/100}`
}

export default formatCurrency