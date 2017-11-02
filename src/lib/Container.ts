/**
 * Simple container object for storing any objects/instances under string keys.
 * Can be used as simple DI container.
 */
export class Container {

    private services: { [key: string]: any } = {};

    /**
     *
     * @param {string} key
     * @param instance
     */
    public set(key: string, instance: any) {
        this.services[key] = instance;
    }

    /**
     *
     * @param {string} key
     * @return {any}
     */
    public has(key: string): any|undefined {
        return key in this.services;
    }

    /**
     *
     * @param {string} key
     * @return {any}
     */
    public get(key: string): any|undefined {
        if (this.has(key)) {
            return this.services[key];
        }

        throw new Error(`Trying to get non-existing service from container "${key}".`);
    }

    /**
     *
     * @param {string} key
     */
    public delete(key: string): void {
        if (this.has(key)) {
            delete this.services[key];
        }
    }

}
