export default function ShoeList({ shoes, addCart }) {
  function add(size) {
    return function (e) {
      e.preventDefault();
      addCart(e.target.parentNode.id, size);
    };
  }

  return (
    <>
      {shoes.map((shoe) => (
        <div id={shoe.id} key={shoe.id}>
          {shoe.name} {shoe.description} {shoe.price}Rs{" "}
          <button onClick={add("S")}>Buy Small({shoe.S})</button>
          <button onClick={add("M")}>Buy Medium({shoe.M})</button>
          <button onClick={add("L")}>Buy Large({shoe.L})</button>
        </div>
      ))}
    </>
  );
}
