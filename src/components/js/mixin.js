export default {
  mounted() {
    this.default = {...this.$data};
  },
  methods: {
    getObjectKey: (obj, type) => obj ? (obj[type] || {}) : {},

    setDefault(data, cb) {
      Object.assign(this.default, data || this.$data);
      cb ? cb() : null;
    },

    getDefault() {
      return this.default || {};
    },

    reset() {
      Object.assign(this.$data, this.default);
      // const keys = Object.keys(this.$data);
      // for (let key of keys) {
      //   this.$set(this.$data, key, this.default[key]);
      // }
    }
  }
};