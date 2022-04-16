import cn from 'classnames';
import styles from 'css/components/common/PositionSelector.module.scss';
import Select from 'components/common/Select';
import GroupOptions from 'components/common/GroupOptions';
import CheckBoxOptions from 'components/common/CheckBoxOptions'
import Button from 'components/common/Button';
import CountButton from 'components/common/CountButton';
import { ButtonType, StudyType } from 'utils/enum';
import ic_close_24dp from 'images/icon/ic_close_24dp.svg';
import { useState, useEffect } from 'react';
import { CustomChangeEvent, GroupOption } from 'utils/interface';
import { Position } from 'utils/interface';
import { getPositionList, getSkillList } from 'api/studyAPI';

interface PositionSelectorProps {
    studyType?: StudyType;
    onSelect?: (positionList: Position[]) => (void);
}

export default function PositionSelector(props: PositionSelectorProps) {
    const { studyType } = props;

    const [positionGroupList, setPositionGroupList] = useState<GroupOption<string>[]>([]);
    const [skillList, setSkillList] = useState<string[]>([]);
    const [selectedPositionList, setSelectedPositionList] = useState<Position[]>([]);
    const [selectedSkillList, setSelectedSkillList] = useState<string[]>([]);
    const [position, setPosition] = useState<Position>({positionName: '', count: 0, totalCount: 0, skills: [], recruited: false})

    useEffect(() => {
        (async function() {
            try {
                const { data: { data }} = await getPositionList();
                console.log(data);
                setPositionGroupList(data.map((item: any) => {
                    return {
                        title: item.positionTypeName,
                        items: item.positionNameList,
                    };
                }));
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])

    const onPositionChange = (event: CustomChangeEvent) => {
        if (typeof event.value === 'string') {
            setPosition({...position, positionName: event.value});

            (async function() {
                const { data: { data } } = await getSkillList(event.value);
                console.log(data);
                setSkillList(data.map((item: {skillName: string}) => {
                    return item.skillName;
                }));
            })();
        }
    }

    const onSkillsChange = (event: CustomChangeEvent) => {
        if (typeof event.value === 'object' && Array.isArray(event.value)) {
            setPosition({...position, skills: event.value});
        }
    }

    const onClick = (position: Position, positionList: Position[]) => {
        if (position && position.positionName && position.skills) {
            positionList.push(position);
            setSelectedPositionList(positionList);
            setPosition(Object());

            if (props.onSelect) {
                props.onSelect(selectedPositionList)
            }
        }
    }

    const onChangeCount = (value: number, positionList: Position[], index: number) => {
        const position = positionList[index];
        position.totalCount = value;
        setSelectedPositionList(positionList);

        if (props.onSelect) {
            props.onSelect(selectedPositionList)
        }
    }

    const onClickRemove = (index: number, positionList: Position[]) => {
        const newPositionList: Position[] = new Array<Position>();

        for (let i = 0; i < positionList.length; i++) {
            if (i !== index) {
                newPositionList.push(positionList[i])
            }
        }

        setSelectedPositionList(newPositionList)

        if (props.onSelect) {
            props.onSelect(selectedPositionList);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.selectSection)}>
                {studyType === StudyType.사이드프로젝트 && <Select
                    placeholder='포지션을 선택해 주세요'
                    value={position.positionName}
                    onChange={(event: CustomChangeEvent) => onPositionChange(event)}
                >
                    <GroupOptions<string>
                        options={positionGroupList}
                    />
                </Select>}
                <Select
                    placeholder='스킬을 선택해 주세요'
                    value={position.skills}
                    onChange={(event: CustomChangeEvent) => onSkillsChange(event)}
                >
                    <CheckBoxOptions 
                        options={skillList}
                    />
                </Select>
            </div>
            <Button 
                buttonName='선택 완료'
                buttonType={ButtonType.서브} 
                onClick={() => onClick(position, selectedPositionList)}
            />
            <div className={cn(styles.positionSection)}>
                {(!selectedPositionList || selectedPositionList.length === 0) && <span className={cn(styles.txt)}>선택 완료를 눌러 추가해 주세요</span>}
                {selectedPositionList && selectedPositionList.length > 0 && selectedPositionList.map((position: Position, index: number) => (
                    <div 
                        className={cn(styles.position)}
                        key={index}
                    >
                        <div className={cn(styles.content)}>
                            <div>
                                <h3>{position.positionName}</h3>
                                <p className={cn(styles.skillTags)}>
                                    {position.skills.join('/')}
                                </p>
                            </div>
                            <CountButton onChangeCount={(value: number) => onChangeCount(value, selectedPositionList, index)}/>
                        </div>
                        <button 
                            type="button" 
                            className={cn(styles.closeBtn)}
                            onClick={() => onClickRemove(index, selectedPositionList)}
                        >
                            <img src={ic_close_24dp} alt="닫기"/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}