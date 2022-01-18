import styled from "styled-components";
import cn from "classnames";
import styles from "../../css/components/common/ToolTipBox.module.scss";

// Component
interface IToolTipBoxProps {
  text: string;
}

export const StudyToolTipBox: React.FunctionComponent<IToolTipBoxProps> = ({
  text,
}) => {
  return (
    <div className={cn(styles.StudyToolTipBoxContainer)}>
      <p>{text}</p>
    </div>
  );
};

export const MemberToolTipBox: React.FunctionComponent<IToolTipBoxProps> = ({
  text,
}) => {
  return (
    <div className={cn(styles.MemberToolTipBoxContainer)}>
      <p>{text}</p>
    </div>
  );
};
