import { createVNode, createDOMNode } from './vdom';
import { mount } from './dom'

const vNode = createVNode("div", { class: "container" }, [
  createVNode("h1", {}, ["Hello, Virtual DOM"]),
  "Text node without tags",
  createVNode("img", { src: "https://i.ibb.co/M6LdN5m/2.png", width: 200 })
]);

const node = createDOMNode(vNode)
const app = document.getElementById("root");
mount(node, app);
