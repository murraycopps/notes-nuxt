const { Router } = require('express')
const router = Router()

router.use('/notes', (req, res) => {
    res.send({
        message: 'Hello World!',
        notes: [
            { id: 1, title: 'Note 1', body: 'This is note 1' },
            { id: 2, title: 'Note 2', body: 'This is note 2' },
            { id: 3, title: 'Note 3', body: 'This is note 3' },
        ]
    })
})

module.exports = router