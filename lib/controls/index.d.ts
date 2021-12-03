/// <reference types="react" />
import MaterialBooleanControl, { materialBooleanControlTester } from './MaterialBooleanControl';
import MaterialBooleanToggleControl, { materialBooleanToggleControlTester } from './MaterialBooleanToggleControl';
import MaterialEnumControl, { materialEnumControlTester } from './MaterialEnumControl';
import MaterialNativeControl, { materialNativeControlTester } from './MaterialNativeControl';
import MaterialDateControl, { materialDateControlTester } from './MaterialDateControl';
import MaterialDateTimeControl, { materialDateTimeControlTester } from './MaterialDateTimeControl';
import MaterialTimeControl, { materialTimeControlTester } from './MaterialTimeControl';
import MaterialSliderControl, { materialSliderControlTester } from './MaterialSliderControl';
import MaterialRadioGroupControl, { materialRadioGroupControlTester } from './MaterialRadioGroupControl';
import MaterialIntegerControl, { materialIntegerControlTester } from './MaterialIntegerControl';
import MaterialNumberControl, { materialNumberControlTester } from './MaterialNumberControl';
import MaterialTextControl, { materialTextControlTester } from './MaterialTextControl';
import MaterialAnyOfStringOrEnumControl, { materialAnyOfStringOrEnumControlTester, MaterialAnyOfStringOrEnumControl as MaterialAnyOfStringOrEnumControlUnwrapped } from './MaterialAnyOfStringOrEnumControl';
import MaterialOneOfEnumControl, { materialOneOfEnumControlTester } from './MaterialOneOfEnumControl';
import MaterialOneOfRadioGroupControl, { materialOneOfRadioGroupControlTester } from './MaterialOneOfRadioGroupControl';
export declare const Unwrapped: {
    MaterialBooleanControl: ({ data, visible, label, id, enabled, uischema, schema, rootSchema, handleChange, errors, path, config }: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialBooleanToggleControl: ({ data, visible, label, id, enabled, uischema, schema, rootSchema, handleChange, errors, path, config }: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialEnumControl: (props: import("../../../core/lib").ControlProps & import("../../../core/lib").OwnPropsOfEnum) => JSX.Element;
    MaterialNativeControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialDateControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialDateTimeControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialTimeControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialSliderControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialRadioGroupControl: (props: import("../../../core/lib").ControlProps & import("../../../core/lib").OwnPropsOfEnum) => JSX.Element;
    MaterialIntegerControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialNumberControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialTextControl: (props: import("../../../core/lib").ControlProps) => JSX.Element;
    MaterialAnyOfStringOrEnumControl: typeof MaterialAnyOfStringOrEnumControlUnwrapped;
    MaterialOneOfEnumControl: (props: import("../../../core/lib").ControlProps & import("../../../core/lib").OwnPropsOfEnum) => JSX.Element;
    MaterialOneOfRadioGroupControl: (props: import("../../../core/lib").ControlProps & import("../../../core/lib").OwnPropsOfEnum) => JSX.Element;
};
export { MaterialBooleanControl, materialBooleanControlTester, MaterialBooleanToggleControl, materialBooleanToggleControlTester, MaterialEnumControl, materialEnumControlTester, MaterialNativeControl, materialNativeControlTester, MaterialDateControl, materialDateControlTester, MaterialDateTimeControl, materialDateTimeControlTester, MaterialTimeControl, materialTimeControlTester, MaterialSliderControl, materialSliderControlTester, MaterialRadioGroupControl, materialRadioGroupControlTester, MaterialIntegerControl, materialIntegerControlTester, MaterialNumberControl, materialNumberControlTester, MaterialTextControl, materialTextControlTester, MaterialAnyOfStringOrEnumControl, materialAnyOfStringOrEnumControlTester, MaterialOneOfEnumControl, materialOneOfEnumControlTester, MaterialOneOfRadioGroupControl, materialOneOfRadioGroupControlTester };
export * from './MaterialInputControl';
