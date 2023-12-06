let event = new Event("foo");

window.addEventListener("foo", () => {
  console.log("Event dispatch");
});

document.dispatchEvent(event);