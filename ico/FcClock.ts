import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clock icon from Devicons
 * @module
 */
export function FcClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#00ACC1","cx":"24","cy":"24","r":"20"}},{tag:"circle",attr:{fill:"#eee","cx":"24","cy":"24","r":"16"},child:[]},{tag:"rect",attr:{x:"23",y:"11","width":"2","height":"13"},child:[]},{tag:"rect",attr:{x:"26.1",y:"22.7","transform":"matrix(-.707 .707 -.707 -.707 65.787 27.25)","width":"2.3","height":"9.2"},child:[]},{tag:"circle",attr:{"cx":"24","cy":"24","r":"2"},child:[]},{tag:"circle",attr:{fill:"#00ACC1","cx":"24","cy":"24","r":"1"},child:[]}]})(props);
}
export default FcClock;
