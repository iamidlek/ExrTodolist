function handleClick() {
  const ran1 = Math.floor(Math.random() * 255);
  const ran2 = Math.floor(Math.random() * 255);
  const ran3 = Math.floor(Math.random() * 255);

  document.body.style.background = `
  linear-gradient(217deg, rgba(${ran1},0,0,.8), rgba(${ran1},0,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,${ran2},0,.8), rgba(0,${ran2},0,0) 70.71%),
  linear-gradient(336deg, rgba(0,0,${ran3},.8), rgba(0,0,${ran3},0) 70.71%)
  `;
}
window.addEventListener("load", handleClick);
