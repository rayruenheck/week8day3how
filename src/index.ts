import { v4 as uuidv4 } from 'uuid';

type Item = {
    id:string
    name:string
    price:number
    desc:string
}

type User = {
    id:string
    name:string
    age:number
    cart: Item[]
}
function createUser(name:string,age:number){
    const user:User={id:uuidv4(),name:name,age:age,cart:[]}
    return user
}

function createItem(name:string,price:number,desc:string){
    const item:Item ={id:uuidv4(),name:name,price:price,desc:desc}
    return item
}

function addToCart(user:User,item:Item){
    return user.cart.push(item)
}

function removeFromCart(item:Item,user:User){
    let i = user.cart.length
    while(i--){
        if(user.cart[i]=== item){
            user.cart.splice(i,1)
        }
    }return user.cart
}
function removeQuantityFromCart(item:Item,user:User,num:number){
    let n = user.cart.indexOf(item)
    return user.cart.splice(n,num)
}

function cartTotal(user:User){
    console.log(`total price in ${user.name}'s cart is: ${user.cart.reduce((acc,item)=> acc+item.price,0)}$`)
    return user.cart.reduce((acc,item)=> acc+item.price,0)
    
}
function printCart(user:User):void{
    console.log(user.cart)
}

function driver(name:string,age:number){
    const user = createUser(name,age)
    const apple = createItem('apple',3,'red deliciuos')
    const banana = createItem('banana',1,'rype and ready to go')
    const orange =createItem('orange',2,'easy peel')
    addToCart(user,apple)
    cartTotal(user)
    printCart(user)
    addToCart(user,banana)
    addToCart(user,banana)
    addToCart(user,banana)
    printCart(user)
    addToCart(user,orange)
    addToCart(user,orange)
    addToCart(user,orange)
    cartTotal(user)
    printCart(user)
    removeFromCart(banana,user)
    cartTotal(user)
    printCart(user)
    removeQuantityFromCart(orange,user,2)
    cartTotal(user)
    printCart(user)
}
driver('ray',25)