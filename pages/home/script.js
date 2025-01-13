const burger = document.querySelector('.burger-menu')
const navigationWrapper = document.querySelector('.navigation-wrapper')
const inner_center = document.querySelector('.header__inner--center')
const nav_menu = document.querySelector('.navigation__burger-menu')

const toggleMenu = () => {
    navigationWrapper.classList.toggle('active')
    inner_center.classList.toggle('active')
};


burger.addEventListener('click', e => {
    
    toggleMenu();
});

nav_menu.addEventListener('click', e => {
    toggleMenu();
})


document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-error');
    if (!name || !/^[A-Za-zА-Яа-я\s]+$/.test(name)) {
        nameError.textContent = 'Пожалуйста, введите корректное имя.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Пожалуйста, введите корректный email.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    const message = document.getElementById('message').value;
    const messageError = document.getElementById('message-error');
    if (!message || message.length < 10) {
        messageError.textContent = 'Сообщение должно содержать не менее 10 символов.';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (isValid) {
        sendFormData({ name, email, message });
    }
});

function sendFormData(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(result => {
            console.log('Успешно отправлено:', result);
            alert('Сообщение успешно отправлено!');
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
}