import React, { useEffect } from "react";

// export const useOutsideClick = (
//   ref: React.RefObject<HTMLDivElement>,
//   callback: Function
// ) => {
//   useEffect(() => {
//     const listener = (event: any) => {
//       // DO NOTHING if the element being clicked is the target element or their children
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       callback(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, callback]);
// };


export const useOutsideClick = (

  ref: React.RefObject<HTMLDivElement | null>,

  callback: () => void

) => {

  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {

      if (ref.current && !ref.current.contains(event.target as Node)) {

        callback();

      }

    }



    document.addEventListener("mousedown", handleClickOutside);

    return () => {

      document.removeEventListener("mousedown", handleClickOutside);

    };

    }, [ref, callback]);
  
  };
