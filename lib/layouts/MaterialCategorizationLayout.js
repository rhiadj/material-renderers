"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCategorizationLayoutRenderer = exports.materialCategorizationTester = exports.isSingleLevelCategorization = void 0;
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
var react_1 = tslib_1.__importStar(require("react"));
var material_1 = require("@mui/material");
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var layout_1 = require("../util/layout");
exports.isSingleLevelCategorization = core_1.and(core_1.uiTypeIs('Categorization'), function (uischema) {
    var categorization = uischema;
    return (categorization.elements &&
        categorization.elements.reduce(function (acc, e) { return acc && e.type === 'Category'; }, true));
});
exports.materialCategorizationTester = core_1.rankWith(1, exports.isSingleLevelCategorization);
var MaterialCategorizationLayoutRenderer = function (props) {
    var data = props.data, path = props.path, renderers = props.renderers, cells = props.cells, schema = props.schema, uischema = props.uischema, visible = props.visible, enabled = props.enabled, selected = props.selected, onChange = props.onChange, ajv = props.ajv;
    var categorization = uischema;
    var _a = react_1.useState(selected !== null && selected !== void 0 ? selected : 0), activeCategory = _a[0], setActiveCategory = _a[1];
    var categories = categorization.elements.filter(function (category) {
        return core_1.isVisible(category, data, undefined, ajv);
    });
    var childProps = {
        elements: categories[activeCategory].elements,
        schema: schema,
        path: path,
        direction: 'column',
        enabled: enabled,
        visible: visible,
        renderers: renderers,
        cells: cells
    };
    var onTabChange = function (_event, value) {
        if (onChange) {
            onChange(value, activeCategory);
        }
        setActiveCategory(value);
    };
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.AppBar, { position: 'static' },
            react_1.default.createElement(material_1.Tabs, { value: activeCategory, onChange: onTabChange, textColor: 'inherit', indicatorColor: 'secondary' }, categories.map(function (e, idx) { return (react_1.default.createElement(material_1.Tab, { key: idx, label: e.label })); }))),
        react_1.default.createElement("div", { style: { marginTop: '0.5em' } },
            react_1.default.createElement(layout_1.MaterialLayoutRenderer, tslib_1.__assign({}, childProps)))));
};
exports.MaterialCategorizationLayoutRenderer = MaterialCategorizationLayoutRenderer;
exports.default = react_2.withJsonFormsLayoutProps(layout_1.withAjvProps(exports.MaterialCategorizationLayoutRenderer));
//# sourceMappingURL=MaterialCategorizationLayout.js.map