import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Down icon from Devicons
 * @module
 */
export function FcDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#3F51B5"},child:[{tag:"polygon",attr:{"points":"24,44 12.3,30 35.7,30"}},{tag:"rect",attr:{x:"20",y:"6","width":"8","height":"27"},child:[]}]}]})(props);
}
export default FcDown;
