/**
 *
 * @param objSource    - исходный объект
 * @param propertyPath - передаваемая строка свойств объекта
 * @param newValue        - новое значение для присвоения
 *
 * @returns
 *
 * updateObjectProperty(somethingObj, 'captionSlot.text', 'Some new caption');
 * updateObjectProperty(anotherObj, 'cancelSlot.classes', 1e9);
 */
function updateObjectProperty(objSource: object, propertyPath: string, newValue: any): void {
  const properties = propertyPath.split(".");
  const lastProperty = properties[properties.length - 1];
  let obj: Record<string, any> = objSource;

  for (let i = 0; i < properties.length - 1; i++) {
    if (obj.hasOwnProperty(properties[i])) {
      obj = obj[properties[i]];
    } else {
      console.error("Property does not exist");
      return;
    }
  }

  if (obj.hasOwnProperty(lastProperty)) {
    obj[lastProperty] = newValue;
  } else {
    console.error("Property does not exist");
  }
}

export { updateObjectProperty };
