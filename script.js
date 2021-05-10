(function () {

    const hourNode   = document.querySelector('.clock__hours')
    const minuteNode = document.querySelector('.clock__minutes')
    const secondNode = document.querySelector('.clock__seconds')

    function changeTime() {
        const date = new Date()

        redrawNode(hourNode, date.getHours())
        redrawNode(minuteNode, date.getMinutes())
        redrawNode(secondNode, date.getSeconds())
    }

    function redrawNode(node, value) {
        if (checkToRedraw(node, value)) {
            node.textContent = formatNumber(value)
        }
    }

    // Function to check redrawing
    function checkToRedraw(node, value) {
        const nodeElementText = +node.textContent

        if (value !== nodeElementText) {
            return true
        }
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
