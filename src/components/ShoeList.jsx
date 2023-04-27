export default function ShoeList({ shoes }) {
  return (
    <>
      {shoes.map((shoe) => (
        <div id={shoe.id} key={shoe.id}>
          {shoe.name} {shoe.description} {shoe.price}Rs{" "}
          <button>Buy Small({shoe.S})</button>
          <button>Buy Medium({shoe.M})</button>
          <button>Buy Large({shoe.L})</button>
        </div>
      ))}
    </>
  );
}
