const formulario = document.querySelector("form")
let errores = {}
formulario.addEventListener("submit",(e) => {
    e.preventDefault()
    errores = {}
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username.trim().length < 5){
        errores = {
            ...errores,
            username : "Username no valido"
        }
    }
    if(password.trim().length < 8){
        errores = {
            ...errores,
            password: "contraseña inválida"
        }
    }
    
    if(Object.keys(errores).length === 0){
        alert("Todo bien")
        return
    }

    alert(Object.values(errores))
    
})
