interface ButtonProps {
    value?: number;
    text: string;
    subText?: string;
    normalText?: boolean;
    wide?: boolean;
    selected: boolean;
    onClick?: () => void;
}

// Menu Item with a numerical value to the left, the Area at the middle, with the vertical overflow icon to the right. Faint gray border, blue when selected.
const Button = ({value, text, selected, onClick, ...rest}: ButtonProps) => {
    const {subText, normalText, wide} = rest;
    // faux random number using value bw 1 and 1000+value
    const random = Math.floor(Math.random() * 1000) + (value || 1);

    return (
        <li
            className={`${wide ? 'flex-grow' : ''} text-sm font-${normalText ? 'normal' : 'semibold'} text-left flex items-center justify-start gap-x-2 px-4 py-2 rounded-md border border-gray-200 ${selected ? 'bg-blue-700 text-white' : 'hover:bg-gray-100'}`}
            onClick={onClick}
        >
            {value ? <span>{random}</span> : <></>}
            <span className={"flex flex-col "}>
                <span className={"whitespace-nowrap text-left"}>{text}</span>
                {subText ?
                    <span className={`text-xs text-${selected ? 'gray-400' : 'gray-600'}`}>{subText}</span> : <></>}
            </span>
            <span className={"ml-auto"}>...</span>
        </li>
    );
}

export default Button;