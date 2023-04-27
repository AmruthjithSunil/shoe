export default function ShoeForm({ addShoe }) {
  function submitHandler(e) {
    e.preventDefault();
    const shoe = {
      id: shoename.value,
      name: shoename.value,
      description: description.value,
      price: price.value,
      L: l.value,
      M: m.value,
      S: s.value,
    };
    addShoe(shoe);
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="shoename">Shoe name:</label>
      <input type="text" id="shoename" name="shoename" />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" />
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" />
      <br />
      <label htmlFor="l">L:</label>
      <input type="number" id="l" name="l" />
      <label htmlFor="m">M:</label>
      <input type="number" id="m" name="m" />
      <label htmlFor="s">S:</label>
      <input type="number" id="s" name="s" />
      <input type="submit" value="Add" />
    </form>
  );
}
