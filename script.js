(function () {

    const hourNode   = document.querySelector('.clock__hours')
    const minuteNode = document.querySelector('.clock__minutes')
    const secondNode = document.querySelector('.clock__seconds')

    function changeTime() {
        const date = new Date()
        checkToRedraw(hourNode, date.getHours())
        checkToRedraw(minuteNode, date.getMinutes())
        redrawNode(secondNode, date.getSeconds())
    }

    // Function to check redrawing
    function checkToRedraw(node, value) {
        const nodeElementText = +node.textContent
        if (value !== nodeElementText) {
            redrawNode(node, value)
        }
    }

    function redrawNode(node, value) {
        node.textContent = formatNumber(value)
    }

    function formatNumber(number) {
        let newNumber = number
        if (newNumber < 10) {
            newNumber = `0${number}`
        }
        return newNumber
    }

    setInterval(changeTime, 1000)

})()
