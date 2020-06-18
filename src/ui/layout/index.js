import * as React from 'react';
import styles from './layout.module.scss';
import cn from 'class-names'

export const spacingToClassName = {
    0: '',
    2: styles.spacing2,
    4: styles.spacing4,
    8: styles.spacing8,
    16: styles.spacing16,
    20: styles.spacing20,
    24: styles.spacing24,
    28: styles.spacing28,
    32: styles.spacing32,
    48: styles.spacing48,
}

export const FlexItem = ({block = false, children}) => {
    const classNames = cn(styles.flexItem, {[styles.itemBlock]:block})
    return <div className={classNames}>{children}</div>;
}

export const Flex = ({children, spacing = 0, col = false, alignCenter = false, valignCenter = false, block = false}) => {
    const classNames = cn(spacingToClassName[spacing], {
        [styles.flex]: !col,
        [styles.flexCol]: col,
        [styles.alignCenter]: alignCenter,
        [styles.valignCenter]: valignCenter,
        [styles.block]: block
    })
    return <div className={classNames}>{children}</div>
}

//
// export const FlexItem = styled.div`
//     ${props => props.block ? 'width:100%' : ''}
// `
//
// export const Flex = styled.div`
//    display:${props => props.block ? 'flex' : 'inline-flex'};
//    align-items:${props => props.alignItems ? props.alignItems : 'flex-start'};
//    justify-content:${props => props.justifyContent ? props.justifyContent : 'start'};
//    & > ${FlexItem} {
//        &:not(:last-of-type){
//         margin-right:${props => props.spacing ? props.spacing + 'px' : '0px'};
//        }
//    }
// `;
//
// export const FlexCol = styled.div`
//    display:inline-flex;
//    align-items:${props => props.alignItems ? props.alignItems : 'flex-start'};
//    justify-content:${props => props.justifyContent ? props.justifyContent : 'start'};
//    width:${props => props.block ? '100%' : 'auto'};
//    flex-direction:column;
//    & > ${FlexItem} {
//         &:not(:last-of-type){
//             margin-bottom:${props => props.spacing ? props.spacing + 'px' : '0px'};
//         }
//    }
// `
//
