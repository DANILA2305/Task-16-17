const NAME = document.getElementById("name_login")
const SURNAME = document.getElementById("surname_login")
const EMAIL = document.getElementById("email_login")
const PASSWWORD = document.getElementById("password_login")
const LIST = document.getElementById("input_list")

const min = 4

const minChar = () => {
    const NamePassed = NAME.value.length > 4
    const SurnamePassed = SURNAME.value.length > 4
    const PasswordPassed = PASSWWORD.value.length > 4

    if (NamePassed) {
        console.log("Name - norm")
    } else {
        alert("Ім'я " + NAME.value + " занадто коротке. Мінімальна довжина - 5 символів")
    }

// ^ Перевірка довжини ім'я

    if (SurnamePassed) {
        console.log("Surname - norm")
    } else {
        alert("Прізвище " + SURNAME.value + " занадто коротке. Мінімальна довжина - 5 символів")
    }

// ^ Перевірка довжини прізвища

    if (PasswordPassed) {
        console.log("Password - norm")

    } else {
        alert("Ваш пароль занадто короткий. Мінімальна довжина - 8 символів")
    }

// ^ Перевірка довжини пароля

    if (PasswordPassed && SurnamePassed && NamePassed) {
        alert(NAME.value + " " + SURNAME.value + ", раді тебе бачити!")
        console.log("Email: " + EMAIL.value + ", Password: " + PASSWWORD.value )
    } else {
        console.log("nenorm")
    }
}

LIST.onsubmit = (prev) => {
    prev.preventDefault();
    minChar()
} 

