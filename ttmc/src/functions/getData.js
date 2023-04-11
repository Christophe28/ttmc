export const dataFetch = async (setData) => {
  const data = await (await fetch("http://localhost:8000")).json();
  setData(data);
}