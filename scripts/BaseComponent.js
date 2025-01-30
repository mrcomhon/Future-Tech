class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('невозможно создать экземпляр абстракного класса BaseComponent')
        }
    }

  getProxyState(initalState) {
    return new Proxy(initalState, {
      get: (target, prop) => {
        return target[prop];
      },
        set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue;

            if (newValue !== oldValue) {
        this.updateUI();
        }

        return true;
      },
    });
  }
    
    updateUI() {
        throw new Error('надо реализовать метод updateUI')
    }
}

export default BaseComponent