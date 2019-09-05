export default {
  methods: {
    assignCss: (obj, type) => obj ? (obj[type] || {}) : {}
  }
};