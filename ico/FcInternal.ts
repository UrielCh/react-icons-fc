import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Internal icon from Devicons
 * @module
 */
export function FcInternal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#B3E5FC","cx":"24","cy":"30","r":"15"}},{tag:"g",attr:{fill:"#1565C0"},child:[{tag:"polygon",attr:{"points":"24,38.7 15,28 33,28"},child:[]},{tag:"rect",attr:{x:"21",y:"5","width":"6","height":"26"},child:[]}]}]})(props);
}
export default FcInternal;
