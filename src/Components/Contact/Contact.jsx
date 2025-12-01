import React from 'react'
import contact_icon from "../../pictures/contact.png"
import "./Contact.css"

function Contact(){
    return (
        <div id="contact">
            <div className="leftContact">
                <img src = {contact_icon} alt = "contact"></img>
            </div>
            <div className="rightContact">
                <form action = "https://formspree.io/f/xovkkdlz" method = 'POST'> 
                    <input name = "username" type = "text" placeholder = "Write your username" />
                    <input name = "Email" type = "e-mail" placeholder = "Fill Your email" />
                    <textarea name = "message" id = "textarea" placeholder = "Message me"></textarea>
                    <input type = "submit" id = "btn" value = "Submit Query"/>

                </form>
            </div>
        </div>
    )

}

export default Contact