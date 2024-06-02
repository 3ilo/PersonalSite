import './styles/contact.css'
import { SectionHeader, TextField, GenericWrapper, SubHeader } from '../components/Commons'
import { Link } from "react-router-dom";

export default function Contact() {
    const cContacts = <><a href="mailto: TODO">TODO add email</a> | <a href="https://www.linkedin.com/in/milochase/">LinkedIn</a> | <a href="https://github.com/3ilo">GitHub</a></>

    return (
        <div className="contactSection">
          <SectionHeader text="Contact" alignment="Center" />
          <TextField text={cContacts} alignment="Center" />
        </div>
    )
}