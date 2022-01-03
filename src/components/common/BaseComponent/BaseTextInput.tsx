import 'css/components/common/BaseComponent/BaseTextInput.module.scss';

interface TextInputProps {
    placeholder: string;
    value: string;
    disabled: boolean;
    onChangeText: Function;
}

export default function TextInput(props: TextInputProps) {
    const { placeholder, value, disabled } = props;

    return (
        <input 
            type="text"
            placeholder={placeholder} 
            value={value} 
            disabled={disabled}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeText(event.target.value)}
        />
    )
}