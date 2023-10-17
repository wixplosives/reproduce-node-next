import classNames from 'classnames';
import styles from './test-component.module.scss';

export interface TestComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestComponent = ({ className }: TestComponentProps) => {
    return <div className={classNames(styles.root, className)}>TestComponent</div>;
};
