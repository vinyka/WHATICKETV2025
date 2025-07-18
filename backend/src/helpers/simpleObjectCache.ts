import { Logger } from "pino";

/**
 * A simple object cache with a time-to-live (TTL) for each key
 */
export class SimpleObjectCache {
  private ttl: number;

  private logger: Logger;

  private cache: Map<string, { value: any; timer: NodeJS.Timeout }>;

  /**
   * @param ttl Time to live in milliseconds
   * @param logger
   */
  constructor(ttl: number, logger: Logger = null) {
    this.ttl = ttl;
    this.logger = logger;
    this.cache = new Map();
  }

  /**
   * Set a key-value pair in the cache
   * @param key
   * @param value
   * @returns void
   * @example cache.set('foo', 'bar');
   * @example cache.set('foo', { bar: 'baz' });
   */
  set(key: string, value: any) {
    // If a timer already exists for this key, clear it
    if (this.cache.has(key)) {
      clearTimeout(this.cache.get(key)!.timer);
      this.logger?.debug(`clave de caché ${key} fue aclarado`);
    }

    // Set a new timer
    const timer = setTimeout(() => {
      this.cache.delete(key);
      this.logger?.debug(`clave de caché ${key} estaba caducado`);
    }, this.ttl);

    // Store the value and the timer in the cache
    this.cache.set(key, { value, timer });
    this.logger?.debug(`clave de caché ${key} fue salvado`);
  }

  /**
   * Get a value from the cache
   * @param key
   * @returns The value stored in the cache
   * @example cache.get('foo');
   */
  get(key: string) {
    const data = this.cache.get(key);
    if (!data) {
      return null;
    }

    this.logger?.debug(`clave de caché ${key} fue accedido`);
    return data.value;
  }
}