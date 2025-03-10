import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * About icon from Devicons
 * @module
 */
export function FcAbout(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#2196F3",d:"M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"}},{tag:"g",attr:{fill:"#fff"},child:[{tag:"rect",attr:{x:"22",y:"20","width":"4","height":"11"},child:[]},{tag:"circle",attr:{"cx":"24","cy":"15","r":"2"},child:[]}]}]})(props);
}
export default FcAbout;
