import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const DayFour = () => {
    const [formData, setFormData] = useState({ gender: 'male' })
    const [validity, setValidity] = useState({
        username: false,
        email: false,
        password: false,
        repassword: false,
        checkbox: false,
    })
    const [activeSubmit, setActiveSubmit] = useState(false)

    const handleFieldChange = (e) => {
        setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    console.log(formData)
    console.log(validity)

    useEffect(() => {
        if (formData.username && /^[A-Za-z0-9]{4,}$/.test(formData.username))
            setValidity((prev) => {
                return { ...prev, username: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, username: false }
            })

        if (formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            setValidity((prev) => {
                return { ...prev, email: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, email: false }
            })

        if (formData.password && /^.{8,}$/.test(formData.password))
            setValidity((prev) => {
                return { ...prev, password: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, password: false }
            })

        if (formData.repassword && formData.repassword === formData.password)
            setValidity((prev) => {
                return { ...prev, repassword: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, repassword: false }
            })

        setValidity((prev) => {
            return { ...prev, checkbox: formData.checkbox }
        })
    }, [formData])

    useEffect(() => {
        if (Object.values(validity).includes(false)) setActiveSubmit(false)
        else setActiveSubmit(true)
    }, [validity])

    return (
        <Container>
            <form method="post">
                <h1>Register</h1>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleFieldChange}
                />
                <br />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                />
                <br />
                <label>Gender</label>
                <select name="gender" onChange={handleFieldChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleFieldChange}
                />
                <br />
                <label>Re-enter password</label>
                <input
                    type="text"
                    name="repassword"
                    value={formData.rePassword}
                    onChange={handleFieldChange}
                />
                <br />
                <input
                    name="checkbox"
                    type="checkbox"
                    onChange={(e) =>
                        setFormData((prev) => {
                            return { ...prev, checkbox: e.target.checked }
                        })
                    }
                />
                I have read the agreement
                <br />
                <button type="button" disabled={!activeSubmit}>
                    Submit
                </button>
            </form>
        </Container>
    )
}

export default DayFour
