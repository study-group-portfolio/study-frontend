import cn from 'classnames';
import styles from 'css/pages/test/Functional.module.scss';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { useGoPage } from 'utils/custom-hook';
import { Path } from 'utils/enum';

export default function Functional() {
    const goPage = useGoPage(Path.메인);

    return (
        <div className={cn(styles.container)}>
            <h2>클릭 이벤트를 이용해서 페이지를 이동시키는 기능</h2>
            <div className={cn(styles.section)}>
                <form>
                    <Button 
                        buttonName='클릭'
                        buttonType={ButtonType.기본}
                        onClick={() => goPage()}
                    />
                </form>
                <p>
                    위의 버튼을 클릭하면 메인 페이지로 이동합니다.
                </p>
            </div>
        </div>
    )
}