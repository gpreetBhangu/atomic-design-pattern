module.exports = {
    theme: {
        divideColor: theme => ({
            ...theme('borderColors'),
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': 'red',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        })
    }
}