import { useState } from "react"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
// import axios from "axios"


export const Signin = () => {
    const [username, setUsername] = useState([""])
    const [password, setPassword] = useState([""])
    const navigate = useNavigate()

    return <div className="bg-gray-800 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-gray-400 w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"enter valid credentials"} />
                <InputBox onChange={(e) => {setUsername(e.target.value)}} label={"Username"} placeholder={"test@gmail.com"} />
                <InputBox onChange={(e) => {setPassword(e.target.value)}} label={"Password"} placeholder={"enter ur password"} />

                <div className="pt-4"> 
                    <Button onClick={async () => {
                        // const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        //     username,
                        //     password
                        // });
                        navigate('/home')
                    }} label={"Sign In"} />
                </div>
            </div>
        </div>
    </div>
}