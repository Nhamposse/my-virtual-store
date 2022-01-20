let show_bar = document.getElementById ('show_bar')
let search_container = document.getElementById ('search_container')
let userName = document.getElementById ('userName')
let password = document.getElementById ('password')

function showBar(){
    search_container.classList.toggle('hide')
}

function closeSearch(){
    search_container.classList.toggle('hide')
}

function login(){
    if (userName.value == 'Lole' && password.value == '123456'){
        window.open('index.html')
    } else {
        window.alert('user name ou pass errada')        
    }
        userName.value = ''
        userName.focus()
        password.value = ''
}