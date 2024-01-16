/*!
* Copyright 2022, 2023 Utrecht University
*
* Licensed under the EUPL, Version 1.2 only
* You may not use this work except in compliance with the
Licence.
* A copy of the Licence is provided in the 'LICENCE' file in this project.
* You may also obtain a copy of the Licence at:
*
* https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
*
* Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
* See the Licence for the specific language governing
permissions and limitations under the Licence.
*/
import { u as s } from "./useInputValue-e686f6e9.js";
function r(e) {
  const u = n(e);
  return u === null ? 0 : u;
}
function n(e) {
  const u = e.target.valueAsNumber;
  return isNaN(u) ? null : u;
}
export {
  s as useInputValue,
  r as useInputValueAsNumber,
  n as useInputValueAsNumberOrNull
};
