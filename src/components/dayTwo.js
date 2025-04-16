import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Welcome = () => {
    const persons = [
        { name: 'Hoangdd', age: 34, color: 'red' },
        { name: 'Son Tung MTP', age: 25, color: 'yellow' },
        { name: 'Ronaldo', age: 37, color: 'green' },
    ]

    return (
        <>
            {persons.map((person) => (
                <div
                    key={person.name}
                    style={{ backgroundColor: person.color }}
                >
                    <h1>Hello {person.name}</h1>
                    <h3>Age: {person.age}</h3>
                </div>
            ))}
        </>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
            {count}
            <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
        </>
    )
}

const Checkbox = () => {
    const [checkboxes, setCheckBoxes] = useState({
        all: false,
        coding: false,
        music: false,
        'reading books': false,
    })

    const handleCheckBoxChange = (e) => {
        setCheckBoxes((prev) => {
            if (e.target.value === 'all')
                return {
                    all: true,
                    coding: true,
                    music: true,
                    'reading books': true,
                }
            if (!e.target.checked)
                return {
                    ...prev,
                    [e.target.value]: e.target.checked,
                    all: false,
                }
            return { ...prev, [e.target.value]: e.target.checked }
        })
    }

    return (
        <>
            <p>Choose your interests</p>

            <Form.Check
                type="checkbox"
                label="All"
                onChange={handleCheckBoxChange}
                value="all"
                checked={checkboxes.all}
            />

            <Form.Check
                type="checkbox"
                label="Coding"
                onChange={handleCheckBoxChange}
                value="coding"
                checked={checkboxes.coding}
            />

            <Form.Check
                type="checkbox"
                label="Music"
                onChange={handleCheckBoxChange}
                value="music"
                checked={checkboxes.music}
            />

            <Form.Check
                type="checkbox"
                label="Reading books"
                onChange={handleCheckBoxChange}
                value="reading books"
                checked={checkboxes['reading books']}
            />
            <p>You selected: {JSON.stringify(checkboxes)}</p>
        </>
    )
}

const selects = [
    { name: 'Welcome', element: <Welcome /> },
    { name: 'Counter', element: <Counter /> },
    { name: 'Checkbox', element: <Checkbox /> },
]

const DayTwo = () => {
    const [selected, setSelected] = useState(selects[0])

    const handleSelectChange = (e) => {
        setSelected(selects[e.target.value])
    }

    return (
        <>
            <Container>
                <Form.Select onChange={handleSelectChange}>
                    {selects.map((select, index) => (
                        <option key={select.name} value={index}>
                            {select.name}
                        </option>
                    ))}
                </Form.Select>
                <p>Option selected: {selected.name}</p>
                {selected.element}
            </Container>
        </>
    )
}

export default DayTwo
