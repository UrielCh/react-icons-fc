import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plus icon from Devicons
 * @module
 */
export function FcPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#4CAF50","cx":"24","cy":"24","r":"21"}},{tag:"g",attr:{fill:"#fff"},child:[{tag:"rect",attr:{x:"21",y:"14","width":"6","height":"20"},child:[]},{tag:"rect",attr:{x:"14",y:"21","width":"20","height":"6"},child:[]}]}]})(props);
}
export default FcPlus;
