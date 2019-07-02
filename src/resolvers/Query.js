exports.Query = {
  hello(parent, args, context, info) {
    return "Hello World :)"
  },

  hello_you(parent, args, context, info) {
    return "Hello " + args.name;
  }
};
