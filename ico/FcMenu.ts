import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu icon from Devicons
 * @module
 */
export function FcMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#607D8B"},child:[{tag:"rect",attr:{x:"6",y:"22","width":"36","height":"4"}},{tag:"rect",attr:{x:"6",y:"10","width":"36","height":"4"},child:[]},{tag:"rect",attr:{x:"6",y:"34","width":"36","height":"4"},child:[]}]}]})(props);
}
export default FcMenu;
