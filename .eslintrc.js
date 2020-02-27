module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
        "react/destructuring-assignment": 0,
        "complexity": [
            1,
            5
        ]
    },
    'globals': {
        "fetch": false
    }
}