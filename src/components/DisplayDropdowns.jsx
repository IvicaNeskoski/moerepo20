import { Dropdown } from "./Dropdown"
import { socials, people } from "./mockData"

export const DisplayDropdowns = () => {

    const [socialSelected, setSocialSelected] = useState("")
    const [personSelected, setPersonSelected] = useState("")

    return <div>
        {/*Socials*/}
        <Dropdown
        options={socials}
        label="Socials"
        onChange={e => setSocialSelected(e.target.value)}
        />
        <p>selected : {socialSelected}</p>


        {/*People*/}
        <Dropdown/>
        
        onChange={e => setSocialSelected(e.target.value)}
        <p> selected person : {personSelected}</p>
    </div>



}