import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * External icon from Devicons
 * @module
 */
export function FcExternal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#B2DFDB","cx":"24","cy":"31","r":"14"}},{tag:"g",attr:{fill:"#009688"},child:[{tag:"polygon",attr:{"points":"24,3.3 33,14 15,14"},child:[]},{tag:"rect",attr:{x:"21",y:"11","width":"6","height":"23"},child:[]}]}]})(props);
}
export default FcExternal;
