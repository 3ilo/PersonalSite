import './styles/Contact.css'
import { SectionHeader, TextField, GenericWrapper, SubHeader } from '../components/Commons'

export default function Contact() {
    const cContacts = <><a href="mailto: hi.milochase@gmail.com">Email</a> | <a href="https://www.linkedin.com/in/milochase/">LinkedIn</a> | <a href="https://github.com/3ilo">GitHub</a></>

    return (
        <div className="contactSection">
          <SectionHeader text="Contact" alignment="Center" />
          <TextField text={cContacts} alignment="Center" />
        </div>
    )
}