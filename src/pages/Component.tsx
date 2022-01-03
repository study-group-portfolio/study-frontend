import { ProcessType, RecruitType, StudyType, ButtonType } from 'utils/enum';
import Button from 'components/common/Button';
import styles from 'css/pages/Component.module.scss';
import cn from 'classnames';

export default function Test() {
    return (
        <div className={cn(styles.container)}>
            <h2>버튼</h2>
            <div className={cn(styles.buttonSection)}>
                <Button 
                    buttonName={'버튼'} 
                    disabled={false} 
                    img={undefined} 
                    buttonType={ButtonType.기본} 
                    onClick={() => {}} />
                <Button 
                    buttonName={'버튼'} 
                    disabled={true} 
                    img={undefined} 
                    buttonType={ButtonType.기본} 
                    onClick={() => {}} />
                <Button 
                    buttonName={'버튼'} 
                    disabled={false} 
                    img={undefined} 
                    buttonType={ButtonType.서브} 
                    onClick={() => {}} />
                <Button 
                    buttonName={'버튼'} 
                    disabled={true} 
                    img={undefined} 
                    buttonType={ButtonType.서브} 
                    onClick={() => {}} />
                <Button 
                    buttonName={'카카오'} 
                    disabled={false} 
                    img={undefined} 
                    buttonType={ButtonType.카카오} 
                    onClick={() => {}} />
                <Button 
                    buttonName={'구글'} 
                    disabled={false} 
                    img={undefined} 
                    buttonType={ButtonType.구글} 
                    onClick={() => {}} />
            </div>
        </div>
    )
}