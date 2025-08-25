// Last updated: 8/26/2025, 1:22:11 AM
var TimeLimitedCache = function () {
    this.store = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    const existing = this.store.get(key);
    const wasAlive = !!existing && existing.expiresAt > now;

    this.store.set(key, { value, expiresAt: now + duration });
    return wasAlive;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();
    const entry = this.store.get(key);
    if (!entry) return -1;

    if (entry.expiresAt > now) {
        return entry.value;
    } else {
        this.store.delete(key);
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    for (const [k, entry] of this.store.entries()) {
        if (entry.expiresAt <= now) this.store.delete(k);
    }
    return this.store.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */