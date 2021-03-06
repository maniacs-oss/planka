module.exports = {
  inputs: {
    id: {
      type: 'json',
      custom: (value) => _.isString(value) || _.isArray(value),
      required: true,
    },
  },

  async fn(inputs, exits) {
    const labels = await sails.helpers.getLabels({
      boardId: inputs.id,
    });

    return exits.success(labels);
  },
};
