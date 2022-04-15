import cn from 'classnames';
import styles from 'css/components/common/PositionSelector.module.scss';
import Select from 'components/common/Select';
import GroupOptions from 'components/common/GroupOptions';
import CheckBoxOptions from 'components/common/CheckBoxOptions'
import Button from 'components/common/Button';
import CountButton from 'components/common/CountButton';
import { ButtonType } from 'utils/enum';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import { useState } from 'react';
import { CustomChangeEvent } from 'utils/interface';
import { Position } from 'utils/interface';

interface PositionSelectorProps {
    onSelect?: (positionList: Position[]) => (void);
}

export default function PositionSelector(props: PositionSelectorProps) {
    const [positionList, setPositionList] = useState(new Array<Position>());
    const [position, setPosition]: [Position, React.Dispatch<Position>] = useState(Object())

    const onChange = (event: CustomChangeEvent) => {
        if (typeof event.value === 'string') {
            setPosition({...position, name: event.value})
        } else if (typeof event.value === 'object' && Array.isArray(event.value)) {
            setPosition({...position, skillList: event.value});
        }
    }

    const onClick = (position: Position, positionList: Position[]) => {
        if (position && position.name && position.skillList) {
            positionList.push({...position, recruitmentCount: 0});
            setPositionList(positionList);
            setPosition(Object());

            if (props.onSelect) {
                props.onSelect(positionList)
            }
        }
    }

    const onChangeCount = (value: number, positionList: Position[], index: number) => {
        const position = positionList[index];
        position.recruitmentCount = value;
        setPositionList(positionList);

        if (props.onSelect) {
            
        }
    }

    const onClickRemove = (index: number, positionList: Position[]) => {
        const newPositionList: Position[] = new Array<Position>();

        for (let i = 0; i < positionList.length; i++) {
            if (i !== index) {
                newPositionList.push(positionList[i])
            }
        }

        setPositionList(newPositionList)

        if (props.onSelect) {
            props.onSelect(newPositionList);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.selectSection)}>
                <Select
                    placeholder='포지션을 선택해 주세요'
                    value={position.name}
                    onChange={(event: CustomChangeEvent) => onChange(event)}
                >
                    <GroupOptions
                        options={POSITION_LIST}
                    />
                </Select>
                <Select
                    placeholder='포지션을 선택해 주세요'
                    value={position.skillList}
                    onChange={(event: CustomChangeEvent) => onChange(event)}
                >
                    <CheckBoxOptions 
                        options={SKILL_LIST}
                    />
                </Select>
            </div>
            <Button 
                buttonName='선택 완료'
                buttonType={ButtonType.서브} 
                onClick={() => onClick(position, positionList)}
            />
            <div className={cn(styles.positionSection)}>
                {!positionList || positionList.length === 0 && <span className={cn(styles.txt)}>선택 완료를 눌러 추가해 주세요</span>}
                {positionList && positionList.length > 0 && positionList.map((position: Position, index: number) => (
                    <div 
                        className={cn(styles.position)}
                        key={index}
                    >
                        <div className={cn(styles.content)}>
                            <div>
                                <h3>{position.name}</h3>
                                <p className={cn(styles.skillTags)}>
                                    {position.skillList.join('/')}
                                </p>
                            </div>
                            <CountButton onChangeCount={(value: number) => onChangeCount(value, positionList, index)}/>
                        </div>
                        <button 
                            type="button" 
                            className={cn(styles.closeBtn)}
                            onClick={() => onClickRemove(index, positionList)}
                        >
                            <img src={ic_close_24dp} alt="닫기"/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

const POSITION_LIST = [
    {
        title: '기획',
        items: ['서비스 기획자', '게임 기획자', 'PM·PO', '데이터 분석가']
    },
    {
        title: '디자인',
        items: ['UX/UI 디자이너', 'UX디자이너', 'GUI 디자이너', '그래픽 디자이너', '3D 디자이너']
    },
    {
        title: '개발',
        items: ['프론트엔드 개발자', '웹 개발자', '서버 개발자', '자바 개발자', '웹 퍼블리셔']
    }
];

const SKILL_LIST = [
    'zeplin', 'jQuery', 'Google Analytics', 
    'iOS', 'C++', 'Amplitude', 
    'Android', 'C#', 'Adobe Photoshop', 
    'html/css', 'Java','Adobe illustrator', 
    'Spring', 'Python','Adobe XD', 
    'React.js','Figma', 'Amazon AWS', 
    'Pycharm','Framer', 'MySQL', 
    'Sketch','JavaScript'
]