import { ProcessType, RecruitType, StudyType, ButtonType, TextInputState, TextInputType, InputType } from 'utils/enum';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import styles from 'css/pages/Component.module.scss';
import cn from 'classnames';
import ic_search_24dp from 'images/icon/ic_search_24dp.svg';

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
            <h2>텍스트 입력창</h2>
            <div className={cn(styles.textInputSection)}>
                <TextInput 
                    placeholder={'안녕'}
                    type={InputType.텍스트형}
                    textInputState={TextInputState.기본값} 
                    textInputType={TextInputType.일반형} />
                <TextInput 
                    placeholder={'안녕'} 
                    type={InputType.텍스트형}
                    buttonText={'버튼'} 
                    textInputState={TextInputState.기본값} 
                    textInputType={TextInputType.버튼형} />
                <TextInput 
                    placeholder={'안녕'} 
                    type={InputType.텍스트형}
                    buttonImg={ic_search_24dp} 
                    textInputState={TextInputState.기본값} 
                    textInputType={TextInputType.아이콘형} />
            </div>
            <h2></h2>
        </div>
    )
}