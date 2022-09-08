function singup(e) {
    event.preventDefault()
    var username = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var user = {
        username: username,
        email: email,
        password: password
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công")
    window.location.href='login.html'
}

function login(e) {
    event.preventDefault()
    var username = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var user = localStorage.getItem(username)
    var data = JSON.parse(user)
    if (user === null) {
        alert("Vui lòng nhập thông tin")
    } else if (
        username == data.username &&
        email == data.email &&
        password == data.password
        ) 
    {
        alert('Đăng nhập thành công')
        window.location.href = './Hotflix/Hotflix/index2.html'
    } else {
        alert('Vui lòng nhập lại mật khẩu')
    }
}