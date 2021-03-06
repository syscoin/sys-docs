"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function TabItem({
  children,
  hidden,
  className
}) {
  return <div role="tabpanel" {...{
    hidden,
    className
  }}>
      {children}
    </div>;
}

var _default = TabItem;
exports.default = _default;