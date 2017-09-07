function Observer() {
  // Computed property cache
  this.cache = {};

  // Property currently being observed
  this.target = undefined;

  // Dependency Map
  this.map = {};
}

Observer.prototype.notify = function(key) {
  let map = this.map[key];
  if(map !== undefined) {
    for(let i = 0; i < map.length; i++) {
      this.notify(map[i]);
    }
  }

  let cache = this.cache;
  if(cache[key] !== undefined) {
    cache[key] = undefined;
  }
}
