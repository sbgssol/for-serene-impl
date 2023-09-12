export default function BinaryToImg(props: {
  data: { [key: string]: number };
}) {
  function convertJSONToUint8Array(data: { [key: string]: number }) {
    const values = Object.values(data);
    return new Uint8Array(values);
  }

  const blob = new Blob([convertJSONToUint8Array(props.data)], {
    type: "image/png",
  });

  const imageUrl = URL.createObjectURL(blob);

  return (
    <>
      <img src={imageUrl} alt="" />
    </>
  );
}
