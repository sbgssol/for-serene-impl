// import { useEffect, useState } from "react";

export default function ImageToBinary(props: { path: string }) {
  fetch(props.path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${props.path}`);
      }
      return response.arrayBuffer(); // Convert response to binary data
    })
    .then((imageData) => {
      // Log the binary data to the console
      console.log(new Uint8Array(imageData));
      // setData(new Uint8Array(imageData));
    })
    .catch((error) => {
      console.error(`Error reading ${props.path}: ${error}`);
    });

  return <></>;
}
