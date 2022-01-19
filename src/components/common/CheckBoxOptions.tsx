import cn from 'classnames';
import styles from 'css/components/common/CheckBoxOptions.module.scss';
import CheckBox from 'components/common/CheckBox';
import { SelectEventType } from 'utils/enum';
import { CustomChangeEvent } from 'utils/interface';

interface CheckBoxProps {
    options?: string[];
    selectedList?: string[];
    onChange?: (changeEvent: CustomChangeEvent) => (void);
}

export default function CheckBoxOptions(props: CheckBoxProps) {
    const { options, selectedList } = props;

    const onClick = (content: string, select: boolean) => {
        if (props.onChange) {
            let newSelectedList: string[];
            
            if (selectedList && select) {
                newSelectedList = [...selectedList, content];
            } else if (selectedList && !select) {
                newSelectedList = selectedList.filter(item => item !== content);
            } else if (!selectedList && select) {
                newSelectedList = [content];
            } else {
                newSelectedList = [];
            }

            const customChangeEvent: CustomChangeEvent = {
                value: newSelectedList,
                selectEventType: SelectEventType.체크선택박스,
            }

            props.onChange(customChangeEvent);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <ul>
                {options && options.map((item: string, index: number) => (
                    <li key={index}>
                        <CheckBox 
                            content={item}
                            selected={!!selectedList && !!selectedList.find(content => content === item)}
                            onClick={(content: string, selected: boolean) => onClick(content, selected)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}