module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'ember'
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended'
    ],
    env: {
        browser: true,
        jquery: true,
        es6: true
    },
    rules: {
        /* Linting rules */
        'no-case-declarations': 'warn',
        'no-cond-assign': 'warn',
        'no-console': 'error',
        'no-trailing-spaces': 'warn',
        'ember/no-side-effects': 'warn',

        /* Style Rules */
        'arrow-parens': 'off',
        'camelcase': ['warn', {
            'properties': 'never'
        }],
        'comma-dangle': 'warn',
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'keyword-spacing': ['warn', {
            'overrides': {
                'catch': {
                    'after': true
                }
            }
        }],
        'new-cap': ['warn', {
            'capIsNew': false
        }],
        'no-prototype-builtins': 'off',
        'no-extra-boolean-cast': 'off',
        'no-script-url': 'warn',
        'no-var': 'off',
        'object-shorthand': 'off',
        'object-curly-spacing': 'off',
        'one-var': 'off',
        'operator-linebreak': ['warn', 'after'],
        'prefer-spread': 'off',
        'prefer-template': 'off',
        'no-template-curly-in-string': 'warn',
        'quote-props': ['warn', 'as-needed'],
        'quotes': ['warn', 'single', {
            'allowTemplateLiterals': true
        }],
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', {
            'anonymous': 'always',
            'named': 'never'
        }],
        'spaced-comment': 'off',
        'space-infix-ops' : 'warn',

        /* Ember Specific Rules */
        'ember-suave/no-const-outside-module-scope': 'off',
        'ember-suave/no-direct-property-access': 'off',
        'ember-suave/prefer-destructuring': 'off',
        'ember-suave/require-access-in-comments': 'off',
        'ember/no-observers': 'warn',
        'ember/avoid-leaking-state-in-ember-objects': 'warn',
        'ember/no-side-effects': 'warn',
        'ember/no-global-jquery': 'off',
        'ember/no-new-mixins': 'warn',
        'ember/require-return-from-computed': 'warn',

        /* custom rules */
        /* 'webrtc-casing': 'error', */ // disabled for now because ember can't pick up custom rules

        /*
         * Decide on these rules as a team
         *
         * object-shorthand: Might want to enforce this
         * arrow-parens: Parens were optional in jscs, but it's always or optional in eslint
         * spaced-comment: Easy fix, but probably not needed
         * camel-case: all or nothing in eslint.  No option for ignoreProperties
         * prefer-spread: could get to this if we wanted
         * no-else-return: Designed for simplicity and readability of code. Helps clarify code paths
         */

        /*
         * WIP Rules
         *
         * The following rules should/will be enforced in our baseline but will
         * be done separately to manage PR size/difficulty.
         */
        'space-before-function-paren': 'off',
        'key-spacing': 'off',
        'comma-spacing': 'off',
        'array-bracket-spacing': 'off',
        'max-statements-per-line': 'off' // Requires original dev support
    },
    overrides: [
    // node files
        {
            files: [
                'ember-cli-build.js',
                'testem.js',
                'config/**/*.js',
                'lib/*/index.js'
            ],
            parserOptions: {
                sourceType: 'script'
            },
            env: {
                browser: false,
                node: true
            }
        }
    ]
};
