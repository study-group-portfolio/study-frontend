import cn from 'classnames';
import styles from '../css/components/PositionBox.module.scss';

import removeBtnImg from '../images/remove_black_24dp.svg';
import addBtnImg from '../images/add_black_24dp.svg';
import closePositionBtnImg from '../images/close_black_24dp.svg';
import remove_skill_black_24dp from '../images/remove_skill_black_24dp.svg';

class PositionBoxProps {
    name: string; // 업무 포지션 이름
    num: number; // 업무 포지션 모집 인원
    skills: string[]; // 해당 업무에 필요한 스킬의 종류

    constructor(name: string, num: number, skills: string[]) {
        this.name = name;
        this.num = num;
        this.skills = skills;
    }
}

function PositionBox(props: PositionBoxProps) {
    const backgroundStyle = {
        backgroundImage: `url(${closePositionBtnImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const badgeBackgroundStyle = {
        backgroundImage: `url(${remove_skill_black_24dp})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.details)}>
                <span className={cn(styles.position)}>{props.name}</span>
                <div className={cn(styles.numberBox)}>
                    <button className={cn(styles.btn, styles.left)} style={getImgStyle(removeBtnImg)}>&nbsp;</button>
                    <input className={cn(styles.num)} defaultValue={props.num} />
                    <button className={cn(styles.btn, styles.right)} style={getImgStyle(addBtnImg)}>&nbsp;</button>
                    <button className={cn(styles.removeBtn)} style={backgroundStyle}></button>
                </div>
            </div>
            <div className={cn(styles.skill)}>
                {props.skills && props.skills.length > 0 && props.skills.map((skill, index) => (
                    <span className={cn(styles.badge)} key={index}>
                        {skill}
                        <button className={cn(styles.removeSkillBtn)} style={badgeBackgroundStyle}></button>
                    </span>
                ))}
                {!(props.skills && props.skills.length > 0) && (
                    <span className={cn(styles.badge)}>
                        미지정
                        <button className={cn(styles.removeSkillBtn)} style={badgeBackgroundStyle}></button>
                    </span>
                )}
            </div>
        </div>
    )
}

function getImgStyle(img: string) {
    return {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
} 

export default PositionBox;