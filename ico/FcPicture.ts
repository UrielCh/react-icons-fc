import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Picture icon from Devicons
 * @module
 */
export function FcPicture(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#F57C00",d:"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{tag:"circle",attr:{fill:"#FFF9C4","cx":"35","cy":"16","r":"3"},child:[]},{tag:"polygon",attr:{fill:"#942A09","points":"20,16 9,32 31,32"},child:[]},{tag:"polygon",attr:{fill:"#BF360C","points":"31,22 23,32 39,32"},child:[]}]})(props);
}
export default FcPicture;
