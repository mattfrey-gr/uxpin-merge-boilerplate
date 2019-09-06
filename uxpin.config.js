module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/Icon/Icon.js',
          'src/components/Badge/Badge.js',
          'src/components/ListItem/ListItem.js',
        ],
      },
      {
        name: 'Messaging',
        include: [
          'src/components/Message/Message.js',
          'src/components/MediaObject/MediaObject.js',
        ],
      },
    ],
  },
  name: 'Grand Rounds Design System',
};
