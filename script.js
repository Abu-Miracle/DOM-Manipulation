const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const JT = document.querySelector('#justAdded');

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (nameInput.value === '' && emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = `Please Enter Name and Email`;
    }
    else if (nameInput.value === '' && emailInput.value !== ''){
        msg.classList.add('error');
        msg.innerHTML = `Please Enter Your Name`;

        //setTimeout(() => msg.remove(), 3000); // to remove after 3 seconds
    } else if (nameInput.value !== '' && emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = `Please Enter Your Email`;
    } else{
        if (!JT.querySelector('h2')) {
            const userHead = document.createElement('h2');
            userHead.innerHTML = 'Recently Added Users';
            JT.appendChild(userHead);
        }

        msg.innerHTML = "";
        // Check if user already exists
        let userExists = false;
        const users = userList.querySelectorAll('li');
        users.forEach(user => {
            const userInfo = user.innerHTML.split('<br>');
            const userName = userInfo[0].replace('NAME: ', '').trim();
            const userEmail = userInfo[1].replace('EMAIL: ', '').trim();

            if (name === userName && email === userEmail) {
                userExists = true;
            }
        });

        if (userExists) {
            msg.classList.add('error');
            msg.innerHTML = 'Already Existing User';
        } else {
            msg.innerHTML = '';
            msg.classList.remove('error');
            const li = document.createElement('li');
            li.innerHTML = `NAME: ${name} <br> EMAIL: ${email}`;
            userList.appendChild(li);
        //Clear Fields
        nameInput.value = "";
        emailInput.value = "";
    }
    
    
}
}
