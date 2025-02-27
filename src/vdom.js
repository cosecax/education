///Виртуальный DOM (VDOM) - это представление пользовательского интерфейса в памяти,
// Например, в JS переменной, по которому можно сформировать "настоящий" DOM.
// Виртуальный DOM отвечает не только представление в памяти, но и за синхронизацию с реальным DOM.

/**
 * 
 * @param {string} tagName - имя тега (например, div или span);
 * @param {NodeProp} props - свойства узла (например, атрибуты - class или id);
 * @param {Node[]} children - дочерние элементы
 * @returns IVNode
 */
export const createVNode = (tagName, props = {}, children = []) => {
  return {
    tagName,
    props,
    children,
  };
};

/**
 * 
 * @param {IVNode} vNode 
 * @returns 
 */
export const createDOMNode = vNode => {
  // Обработка строки без аттрибутов и прочих элементов
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  const { tagName, props, children = [] } = vNode;

  // создаем DOM-узел
  const node = document.createElement(tagName);

  // Добавляем атрибуты к DOM-узлу
  for (key in props) {
    const value = props[key]
    node.setAttribute(key, value)
  }

  // Рекурсивно обрабатываем дочерные узлы
  children.forEach(child => {
    node.appendChild(createDOMNode(child));
  });

  return node;
};
