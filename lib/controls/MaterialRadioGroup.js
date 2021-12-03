"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRadioGroup = void 0;
var tslib_1 = require("tslib");
/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var react_1 = tslib_1.__importDefault(require("react"));
var core_1 = require("@jsonforms/core");
var material_1 = require("@mui/material");
var util_1 = require("../util");
var MaterialRadioGroup = function (props) {
    var _a = util_1.useFocus(), focused = _a[0], onFocus = _a[1], onBlur = _a[2];
    var config = props.config, id = props.id, label = props.label, required = props.required, description = props.description, errors = props.errors, data = props.data, visible = props.visible, options = props.options, handleChange = props.handleChange, path = props.path;
    var isValid = errors.length === 0;
    var appliedUiSchemaOptions = merge_1.default({}, config, props.uischema.options);
    var showDescription = !core_1.isDescriptionHidden(visible, description, focused, appliedUiSchemaOptions.showUnfocusedDescription);
    var onChange = function (_ev, value) { return handleChange(path, value); };
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.FormControl, { component: 'fieldset', fullWidth: !appliedUiSchemaOptions.trim, onFocus: onFocus, onBlur: onBlur },
            react_1.default.createElement(material_1.FormLabel, { htmlFor: id, error: !isValid, component: 'legend', required: core_1.showAsRequired(required, appliedUiSchemaOptions.hideRequiredAsterisk) }, label),
            react_1.default.createElement(material_1.RadioGroup, { value: props.data, onChange: onChange, row: true }, options.map(function (option) { return (react_1.default.createElement(material_1.FormControlLabel, { value: option.value, key: option.label, control: react_1.default.createElement(material_1.Radio, { checked: data === option.value }), label: option.label })); })),
            react_1.default.createElement(material_1.FormHelperText, { error: !isValid }, !isValid ? errors : showDescription ? description : null))));
};
exports.MaterialRadioGroup = MaterialRadioGroup;
//# sourceMappingURL=MaterialRadioGroup.js.map