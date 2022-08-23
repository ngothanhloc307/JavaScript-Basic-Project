const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element seleted");
}

export default getElement;
