import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import axios from "axios"
import { useTranslation } from "react-i18next"
import * as AOS from "aos"
import Swal from "sweetalert2";
import { data } from "../../util/interfaces";
import validate from "../../util/validate";
import "./Contact.css"
import "aos/dist/aos.css"

function Contact() {
    useEffect(() => {
        AOS.init()

    }, [])

    const { t } = useTranslation()
    const [input, setInput] = useState<data>({ name: "", email: "", message: "" })
    const [error, setError] = useState({ name: "", email: "", message: "" })
    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.name.length || !input.email.length || !input.message.length) return
        await axios.post("https://nueva-serena-mail.vercel.app/", input)
        setInput({ name: "", email: "", message: "" })
        Swal.fire({
            title: t("contact.form.alert-title"),
            text: t("contact.form.alert-text"),
            icon: 'success',
            iconColor: 'white',
            confirmButtonText: t("contact.form.alert-button"),
            background: '#00cfff',
            confirmButtonColor: '#ffffff',
            color: 'white',
            backdrop: false,
            customClass: {
                popup: 'custom-swal-popup',
                icon: 'custom-swal-icon',
                title: 'custom-swal-title',
                confirmButton: 'custom-swal-button'
            }
        });
    };

    function handlerChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError(validate({ ...input, [e.target.name]: e.target.value }))
    }

    return (
        <div className="flex justify-center contact-form top-contact ">

            <div className="contact-form-card flex items-center lg:w-3/5 xl:w-2/5 px-4 sm:px-6 sm:mb-6  sm:rounded-3xl" data-aos="fade-down" data-aos-offset="40" data-aos-duration="1000">
                <form className='flex-col w-full  items-center justify-center' onSubmit={sendEmail}>
                    <h2 className="text-white text-3xl">{t("contact.form.title")} <span className='text-blue-500'>email</span></h2>
                    <p className="text-white md:mt-7 text-lg hidden md:block">{t("contact.form.text-large")} </p>
                    <p className="text-white mt-3 md:mt-7 text-lg block md:hidden">{t("contact.form.text-short")}</p>
                    <div className='field-group mt-2 md:mt-8'>
                        <input onChange={handlerChange}
                            value={input.name} autoComplete='false' placeholder={t("contact.form.name")} className=' w-full lg:w-5/6 border border-white bg-transparent
                             text-white p-2 rounded-2xl' type="text" name="name" />
                        {error.name.length > 0 ? <div className='flex text-red-500 error-form mr-1 '>
                            <h3 className='text-red-500 rounded-md text-sm'>{t("contact.form.error-name")}</h3>  </div> : null}
                    </div>
                    <div className='field-group' >
                        <input type="text" value={input.email}
                            autoComplete='false' placeholder={t("contact.form.email")} className=' w-full lg:w-5/6 border border-white bg-transparent text-white p-2 rounded-2xl' onChange={handlerChange} name='email' />
                        {error.email.length > 0 ? <div className='flex text-red-500 mr-1 error-form'>
                            <h3 className='text-red-500 rounded-md text-sm'>{t("contact.form.error-email")}</h3> </div> : null}
                    </div>
                    <div className='field-group'>

                        <textarea placeholder={t("contact.form.message")}
                            value={input.message} className=' w-full lg:w-5/6 border border-white bg-transparent text-white p-2 rounded-2xl' onChange={handlerChange} name='message' />
                        {error.message.length > 0 ? <div className='flex text-red-500 mr-1 error-form'>
                            <h3 className='text-red-500 rounded-md text-sm'>{t("contact.form.error-message")}</h3></div> : null}
                    </div>
                    <div className='flex justify-end '>
                        <button disabled={!input.name.length || !input.email.length || !input.message || !!error.name.length || !!error.email.length || !!error.message.length}
                            className=' text-white rounded border button-form border-white p-1'>{t("contact.form.button")}</button>
                    </div>
                </form>
        
            </div>
            

        </div>
    )
}

export default Contact