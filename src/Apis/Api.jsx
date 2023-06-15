
async function Allproducts() {
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return {data};        
    }catch(error){
        console.error(error);
    }
}

async function Usuarios(){
    try{
        const res = await fetch('https://fakestoreapi.com/users')
        const data = await res.json();
        return {data};
    }catch(error){
        console.log(error)
    }
}

async function Login(user, password){
    try{
        const  res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        })
        const data = await res.json();
        return {data};
    }catch(error){
        console.log(error)
    }
}

async function Categories(){
    try{
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        return {data};
    }catch(error){
        console.log(error)
    }
}


export default {Allproducts, Categories, Usuarios, Login}