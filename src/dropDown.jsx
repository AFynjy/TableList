import React, {useContext, useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const DropDown = ({ title, data }) => {
    const [result, setResult] = useState(data);
    const onSubmit = (e) => {
        console.log(result);
        e.preventDefault();
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Label>{title}</Form.Label>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title={''}
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Вариант 1</Dropdown.Item>
                        <Dropdown.Item href="#"> Вариант 2</Dropdown.Item>
                        <Dropdown.Item href="#">Вариант 3</Dropdown.Item>
                        <Dropdown.Divider />
                    </DropdownButton>
                    <Form.Control
                        name="text"
                        defaultValue={data}
                        onChange={(event) => {
                            setResult(event.target.value);}}
                    />
                    <Button variatn="primary" type="submit">
                        Сохранить
                    </Button>
                </InputGroup>
            </Form>
        </>
    );
}


export default DropDown;


// <>
//     <Form onSubmit={onSubmit}>
//         <InputGroup className="mb-3">
//             <DropdownButton
//                 variant="outline-secondary"
//                 title={title}
//                 id="input-group-dropdown-1"
//             >
//                 <Dropdown.Item href="#">Вариант 1</Dropdown.Item>
//                 <Dropdown.Item href="#"> Вариант 2</Dropdown.Item>
//                 <Dropdown.Item href="#">Вариант 3</Dropdown.Item>
//                 <Dropdown.Divider />
//             </DropdownButton>
//             <Form.Control
//                 name="text"
//                 // value={getValue('regNomer')} onChange={event => change('regNomer', event)}
//                 // value={result}
//                 onChange={(event) => {
//                     setResult(event.target.value);}}
//             />
//             <Button variatn="primary" type="submit">
//                 Сохранить
//             </Button>
//         </InputGroup>
//     </Form>
// </>