import React from 'react';
import { CellProps, WithClassname } from '@jsonforms/core';
import { InputProps } from '@mui/material';
interface MuiTextInputProps {
    muiInputProps?: InputProps['inputProps'];
    inputComponent?: InputProps['inputComponent'];
}
export declare const MuiInputText: React.MemoExoticComponent<(props: CellProps & WithClassname & MuiTextInputProps) => JSX.Element>;
export {};
