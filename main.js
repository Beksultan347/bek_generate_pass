let inputBox = document.querySelector(".input-place");
let length = 12;

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";
let simvol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let didi = lowercase + uppercase + number + simvol;

function passPassword(){
        let password = "";

        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += simvol[Math.floor(Math.random() * simvol.length)];

        while(length > password.length){
            password += didi[Math.floor(Math.random() * didi.length)];
        }
        inputBox.value = password;
    }

    function copyPassword() {
        let inputBox = document.querySelector(".input-place");  // Получаем элемент с классом input-place
        inputBox.select();  // Выделяем текст в поле
    
        navigator.clipboard.writeText(inputBox.value)  // Копируем текст в буфер обмена
            .then(function() {
                console.log("Пароль скопирован в буфер обмена!");  // Логируем успешное копирование
            })
            .catch(function(error) {
                console.error("Ошибка при копировании: ", error);  // Логируем ошибку, если не получилось
            });
    }
