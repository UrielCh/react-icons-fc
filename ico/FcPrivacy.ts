import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Privacy icon from Devicons
 * @module
 */
export function FcPrivacy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#424242",d:"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"}},{tag:"path",attr:{fill:"#FB8C00",d:"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"},child:[]},{tag:"circle",attr:{fill:"#EFEBE9","cx":"24","cy":"31","r":"6"},child:[]},{tag:"circle",attr:{fill:"#1E88E5","cx":"24","cy":"31","r":"3"},child:[]},{tag:"circle",attr:{fill:"#fff","cx":"26","cy":"29","r":"1"},child:[]}]})(props);
}
export default FcPrivacy;
