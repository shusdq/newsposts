const newspostsSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: { type: 'string', maxLength: 50 },
        text: { type: 'string', maxLength: 256 },
        genre: { type: 'string', enum: ['Politic', 'Business', 'Sport', 'Other'] },
        isPrivate: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        author: { type: "string"},
        // deleted: {type: "boolean"}
    },
    additionalProperties: false,
    required: [ 'title', 'text', 'genre', 'isPrivate', ],
};

export default newspostsSchema;
  