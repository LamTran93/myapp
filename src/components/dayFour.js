import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const DayFour = () => {
    const [formData, setFormData] = useState({ gender: 'male' })
    const [validity, setValidity] = useState({})
    const [activeSubmit, setActiveSubmit] = useState(false)

    const handleUsernameChange = (e) => {
        setFormData((prev) => {
            return { ...prev, username: e.target.value }
        })
    }

    const handleEmailChange = (e) => {
        setFormData((prev) => {
            return { ...prev, email: e.target.value }
        })
    }

    const handlePasswordChange = (e) => {
        setFormData((prev) => {
            return { ...prev, password: e.target.value }
        })
    }

    const handleRePasswordChange = (e) => {
        setFormData((prev) => {
            return { ...prev, rePassword: e.target.value }
        })
    }

    const handleGenderChange = (e) => {
        setFormData((prev) => {
            return { ...prev, gender: e.target.value }
        })
    }

    const handleCheckBoxChange = (e) => {
        setFormData((prev) => {
            return { ...prev, checkbox: e.target.checked }
        })
    }

    useEffect(() => {
        if (/^[A-Za-z0-9]{4,}$/.test(formData.username))
            setValidity((prev) => {
                return { ...prev, username: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, username: false }
            })

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            setValidity((prev) => {
                return { ...prev, email: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, email: false }
            })

        if (/^.{8,}$/.test(formData.password))
            setValidity((prev) => {
                return { ...prev, password: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, password: false }
            })

        if (formData.rePassword === formData.password)
            setValidity((prev) => {
                return { ...prev, rePassword: true }
            })
        else
            setValidity((prev) => {
                return { ...prev, rePassword: false }
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
                    value={formData.username}
                    onChange={handleUsernameChange}
                />
                <br />
                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                />
                <br />
                <label>Gender</label>
                <select onChange={handleGenderChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />
                <label>Password</label>
                <input
                    type="text"
                    value={formData.password}
                    onChange={handlePasswordChange}
                />
                <br />
                <label>Re-enter password</label>
                <input
                    type="text"
                    value={formData.rePassword}
                    onChange={handleRePasswordChange}
                />
                <br />
                <input type="checkbox" onChange={handleCheckBoxChange} />
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
