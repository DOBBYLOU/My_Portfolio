import Card from "../Card/Card"
import Styles from "./WorkedWith.module.css"

function WorkedWith() {
    return (
        <div className={`${Styles.workedWith} container`}>
            <h4>Worked with:</h4>
            <div className={`${Styles.cards}`} translate="no">
                <Card src="/Imgs/react-icon-on-white-square.png">React.Js</Card>
                <Card src="/Imgs/node-js-icon.png">Node.js</Card>
                <Card src="/Imgs/js-logo.png">Java Script</Card>
                <Card src="/Imgs/Typescript-logo.png">Tipe Script</Card>
                <Card src="/Imgs/html-logo.png">HTML</Card>
                <Card src="/Imgs/css-logo.png">CSS</Card>
                <Card src="/Imgs/cssc-icon.png"></Card>
                <Card src="/Imgs/Python-logo.png">Pyton</Card>
                <Card src="/Imgs/git-logo.png">Git</Card>
                <Card src="/Imgs/gitHub-logo.png">Git Hub</Card>
                <Card src="/Imgs/c-sharp-logo.png">C Sharp</Card>


            </div>

        </div>
    )
}

export default WorkedWith