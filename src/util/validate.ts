import { data } from "./interfaces";
function validate(input: data) {
    const error = { name: "", email: "", message: "" };
    if (!input.name.length && !input.email.length && !input.message.length) {
        return error
    }
    if (!input.name.length) {
        error.name = "Debe ingresar un nombre";
        return error
    }
    if (!input.email.length) {
        error.email = "Debe ingresar un email";
        return error
    }
    if (input.email.length && !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email)) {
        error.email = "Debe ingresar un email válido";
        return error
    }
    if (!input.message.length) {
        error.message = "Debe ingresar un mensaje";
        return error
    }
    return error;
}

export default validate