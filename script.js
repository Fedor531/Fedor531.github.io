(function () {

    const hourNode = document.querySelector('.clock__hours')
    const minuteNode = document.querySelector('.clock__minutes')
    const secondNode = document.querySelector('.clock__seconds')

    function changeTime() {
        const date = new Date()
        checkHours(date.getHours())
        checkMinutes(date.getMinutes())
        redrawNode(secondNode, date.getSeconds())
    }

    // Function to check redrawing
    function checkHours(hour) {
        const hourElementText = hourNode.textContent
        if (hour !== hourElementText) {
            redrawNode(hourNode, hour)
        }
    }

    // Function to check redrawing
    function checkMinutes(minute) {
        const minuteElementText = minuteNode.textContent
        if (minute !== minuteElementText) {
            redrawNode(minuteNode, minute)
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
