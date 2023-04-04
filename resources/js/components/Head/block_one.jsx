import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Block_1() {

    const [English] = useState('English');
    const [Ukraine] = useState('Ukraine');
    const [Russian] = useState('Russian');
    const [USD] = useState('USD');
    const [UAH] = useState('UAH');
    const [RUS] = useState('RUS');

    const LanguageToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    const CurrencyToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    const CustomMenu = React.forwardRef(
        ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul>
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <div className={'language_and_currency_block'}>

            <Dropdown drop={'start'}>
                <Dropdown.Toggle as={LanguageToggle}
                                 id="dropdown-custom-components">

                    <div className={'language'}>
                        Language: {English}
                    </div>

                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="1">{English}</Dropdown.Item>
                    <Dropdown.Item eventKey="2">{Ukraine}</Dropdown.Item>
                    <Dropdown.Item eventKey="3">{Russian}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown drop={'end'}>
                <Dropdown.Toggle as={CurrencyToggle}
                                 id="dropdown-custom-components">

                    <div className={'currency'}>
                        Currency: {USD}
                    </div>

                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="1">{USD}</Dropdown.Item>
                    <Dropdown.Item eventKey="2">{UAH}</Dropdown.Item>
                    <Dropdown.Item eventKey="3">{RUS}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </div>
    );

}
