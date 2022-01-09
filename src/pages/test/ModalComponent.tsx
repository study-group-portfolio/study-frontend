import JoinModal from "components/modal/JoinModal";
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { useState } from 'react';
import cn from 'classnames';
import styles from 'css/pages/test/ModalComponent.module.scss';


export default function Modal() {
    const [openJoinModal, setOpenJoinModal] = useState(false);

    return (
        <div>
            <div className={cn(styles.container)}>
                <Button 
                    buttonType={ButtonType.기본} 
                    onClick={() => setOpenJoinModal(true)} 
                >
                    JoinModal
                </Button>
            </div>
            <div>
                {openJoinModal && 
                    <JoinModal 
                        onClose={() => setOpenJoinModal(false)}
                    />
                }
            </div>
        </div>
    )
}