import { User } from "../types/User"

const baseURL = 'http://localhost:3000'

const registerUser = async (user:User | {}) =>{

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    try {
        const response = await fetch(`${baseURL}/users/register`,requestOptions)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export default registerUser