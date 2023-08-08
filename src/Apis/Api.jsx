async function Allproducts() {
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return {data};        
    }catch(error){
        console.error(error);
    }
}

async function Producto(id){
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        return {data};
    } catch (error) {
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

async function Register(email, username, password, firstname, lastname, city, street, phone){
    try {
        const res = await fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                    name:{
                        firstname: firstname,
                        lastname: lastname
                    },
                    address:{
                        city: city,
                        street: street,
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone: phone
            })
        })
        const data = await res.json();
        console.log(data)
        return {data};
    } catch (error) {
        console.error(error);
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

async function Category(category){
    try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        return {data};
    } catch (error) {
        console.log(error)
    }
}

export default {Allproducts, Producto, Categories, Usuarios, Login, Register, Category};