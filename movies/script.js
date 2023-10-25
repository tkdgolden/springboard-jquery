$(function() {
    $('button:contains("Submit")').on("click", function(event){
        event.preventDefault()
        let movieName = $(this).siblings('input').eq(0).val()
        let movieRating = $(this).siblings('input').eq(1).val()
        if (movieRating < 0 || movieRating > 10) {
            alert("Rating must be between 0 and 10")
        } else if (movieName.length < 2) {
            alert("Not a valid Movie Name")
        } else {
            $('#insert').append(`<tr><td><button>X</button></td><td class="show">${movieName}</td><td class="show">${movieRating}</td></tr>`)
        }
    })

    $('tbody').on("click", "button", function(){
        $(this).parent().parent().eq(0).remove()

    })

    $('th:contains("Movie Title")').on("click", function() {
        console.log(this)
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr').slice(1).toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    })

    $('th:contains("Rating")').on("click", function() {
        console.log(this)
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr').slice(1).toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    })

    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }

    function getCellValue(row, index){ 
        return $(row).children('td').eq(index).text() 
    }
})