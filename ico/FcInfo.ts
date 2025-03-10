import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Info icon from Devicons
 * @module
 */
export function FcInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#2196F3","cx":"24","cy":"24","r":"21"}},{tag:"rect",attr:{x:"22",y:"22",fill:"#fff","width":"4","height":"11"},child:[]},{tag:"circle",attr:{fill:"#fff","cx":"24","cy":"16.5","r":"2.5"},child:[]}]})(props);
}
export default FcInfo;
